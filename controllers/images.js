const Image = require("../models/image");

module.exports = {
    createImage,
    getAllImages
}

function getAllImages(req, res) {
    Image.find({}).then((images) => {
        res.status(200).json(images);
        console.log("IMAGES DATA", images)
    })
    
}

async function createImage(req, res) {
    await Image.create(req.body).then(image => {
        res.status(201).json(image);
    });
}