const express = require("express");
const urlshortenercontroller = require("../controllers/urlshortenercontroller");
const authController = require("../controllers/authcontroller");

const router = express.Router();

router.use(authController.protect);

router.post("/", urlshortenercontroller.urlshortener);

module.exports = router;
