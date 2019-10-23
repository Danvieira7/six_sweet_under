const express = require('express');
const router = express.Router();
const imageCtrl = require("../../controllers/images");

// Cloudinary setup
const multer = require("multer");
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'demo',
    allowedFormats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 100, height: 67, crop: 'limit' }]
});

const parser = multer({ storage: storage });

router.get("/getAllImages", imageCtrl.getAllImages);
router.post("/createImage", parser.single('image'), imageCtrl.createImage);

module.exports = router;