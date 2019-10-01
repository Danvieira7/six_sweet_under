const express = require('express');
const router = express.Router();
const imageCtrl = require("../../controllers/images");

router.get("/getAllImages", imageCtrl.getAllImages);
router.post("/createImage", imageCtrl.createImage);

module.exports = router;