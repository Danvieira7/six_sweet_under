const Image = require("../models/image");

module.exports = {
    getAllImages,
    createImage
}

async function getAllImages(req, res) {
    await Image.find({}).then( data => {
        res.status(200).json(data);
    })
}

function createImage(req, res) {
    var data = new Image(req.body);
    data.save(() => {
        res.status(201).json(data)
    });
}