const express = require("express");
const shortid = require("shortid");
const validUrl = require("valid-url");
// const authController = require("../controllers/authcontroller");
const URLSchema = require("../models/shorturlsModel");

const router = express.Router();

// router.use(authController.protect);

router.post("/short", async (req, res) => {
  const originalUrl = req.body.url;

  if (!URL) {
    URL = await URLSchema.findOne({
      originalUrl: originalUrl,
    });
  }

  console.log("URL", URL);
  if (!URL) {
    if (validUrl.isUri(req.body.url)) {
      const shortUrl = shortid.generate();
      const newURL = await URLSchema.create({
        originalUrl: originalUrl,
        url: shortUrl,
      });
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

router.get("/:url", async (req, res) => {
  // decode and redirect url
  try {
    if (!url) {
      await URLSchema.findOne({ url: req.params.url });
    }

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

module.exports = router;
