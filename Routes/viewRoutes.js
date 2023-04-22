const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.isLoggedIn, viewsController.getOverview);

router.get("/login", authController.isLoggedIn, viewsController.getLoginForm);

router.get("/signup", authController.isLoggedIn, viewsController.getSignupForm);

router.get("/logout", authController.logout, viewsController.getOverview);

module.exports = router;
