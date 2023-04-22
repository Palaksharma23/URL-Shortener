const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

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
  next(new AppError(`Can't find ${req.originalUrl} on this server}`, 404));
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DB connection successful");
  });

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
  console.log(process.env.NODE_ENV);
});
