const catchAsync = require("../utils/catchAsync");

exports.getHome = catchAsync(async (req, res, next) => {
  res.status(200).render("base", {
    title: "URL Shortener",
  });
});

exports.getLoginForm = (req, res) => {
  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "connect-src 'self' https://cdnjs.cloudflare.com"
    )
    .render("login", {
      title: "User Login",
    });
};

exports.getSignupForm = (req, res) => {
  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "connect-src 'self' https://cdnjs.cloudflare.com"
    )
    .render("signup", {
      title: "User SignUp",
    });
};
