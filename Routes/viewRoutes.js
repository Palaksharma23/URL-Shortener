const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authcontroller");

const router = express.Router();

router.get("/", authController.isLoggedIn, viewsController.getHome);

router.get("/login", authController.isLoggedIn, viewsController.getLoginForm);

router.get("/signup", authController.isLoggedIn, viewsController.getSignupForm);

router.get("/logout", authController.logout, viewsController.getHome);

module.exports = router;
