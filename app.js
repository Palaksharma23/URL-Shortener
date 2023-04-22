const path = require("path");
const URLShortenerRouter = require("./Routes/URLShortenerRoutes");
const userRouter = require("./Routes/userRoutes");
const express = require("express");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

const limiter = rateLimit({
  max: 10,
  windowMs: 60 * 60 * 1000,
  message:
    "User is allowed to make only 10 requests per hour, please try again in an hour",
});

app.use("/api", limiter);

app.use("/api/v1/url-shortener", URLShortenerRouter);
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

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
