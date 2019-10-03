const Image = require("../models/image");

module.exports = {
    getAllImages,
    createImage
}

async function getAllImages(req, res) {
    await Image.find({}).then( data => {
        res.status(200).json(data);
        // console.log("IMAGES DATA", data)
    })
}

function createImage(req, res) {
    var data = new Image(req.body);
    console.log("REQ", req.file)
    console.log("DATA", data)
    // data.image = req.file.url;
    data.save(() => {
        res.status(201).json(data)
    });
    
    // await Image.create(req.body).then( image => {
    //     res.status(201).json(image);
 // });
}