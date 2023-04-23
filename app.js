const path = require("path");
const viewRouter = require("./Routes/viewRoutes");
const userRouter = require("./Routes/userRoutes");
const authcontroller = require("./controllers/authcontroller");
const User = require("./models/userModel");
const express = require("express");
const rateLimit = require("express-rate-limit");
const shortid = require("shortid");
const validUrl = require("valid-url");
const URLSchema = require("./models/shorturlsModel");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const globalErrorHandler = require("./controllers/errorController");
const { createClient } = require("redis");

dotenv.config({ path: "./config.env" });

const client = createClient({
  password: process.env.REDISPASSWORD,
  socket: {
    host: "redis-14029.c8.us-east-1-4.ec2.cloud.redislabs.com",
    port: 14029,
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

async function main() {
  await client.connect();
}

main().catch((err) => console.error(err));

const app = express();

app.use(express.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    "User is allowed to make only 10 requests per hour, please try again in an hour",
});

app.use("/", viewRouter);
app.use("/api", limiter);

app.post("/short", authcontroller.protect, async (req, res) => {
  const originalUrl = req.body.url;

  const URL = await URLSchema.findOne({
    originalUrl: originalUrl,
  });
  console.log("URL", URL);
  if (!URL) {
    if (validUrl.isUri(req.body.url)) {
      const shortUrl = shortid.generate();
      const newURL = await URLSchema.create({
        originalUrl: originalUrl,
        url: shortUrl,
      });
      console.log(res.locals.user._id);
      const curruser = await User.findById(res.locals.user._id);
      curruser.urls.push(newURL._id);
      await curruser.save({
        validateBeforeSave: false,
      });
      await client.set(shortUrl, originalUrl);
      return res.json({
        status: "success",
        data: {
          newURL,
        },
      });
    } else {
      return res.send("Please provide a valid url");
    }
  }
  res.json({
    status: "success",
    data: {
      URL,
    },
  });
});

app.get("/:url", async (req, res) => {
  // decode and redirect url
  try {
    let url = await client.get(req.params.url);
    console.log(url);

    if (url) {
      console.log("URL Found", url);
      return res.redirect(url);
    }

    console.log(url);

    url = await URLSchema.findOne({ url: req.params.url });

    if (url !== null) {
      return res.redirect(url.originalUrl);
    } else {
      res.send("invalid/expired URL");
    }
  } catch (e) {
    console.log(e);
    res.send("invalid/expired URL");
  }
});
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server}`, 404));
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
