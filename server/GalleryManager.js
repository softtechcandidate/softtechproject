const fs = require("fs");
const { uuid } = require('uuidv4');
const sharp = require('sharp');

module.exports = function (_dataStorageManager) {
    let dataStorageManager = _dataStorageManager;

    function main() {
    }

    this.getImages = function () {
        let imageList = dataStorageManager.getImages();
        return imageList;
    };

    this.saveImage = function (newImage) {
        let newImageName = uuid() + ".png";

        const newLargeImagePath = './server/images/large/' + newImageName;
        const newThumbImagePath = './server/images/thumb/' + newImageName;

        return newImage.mv(newLargeImagePath).then(() => {
            return sharp(newLargeImagePath).resize({ height: 30 }).toFile(newThumbImagePath)
                .then(function (newFileInfo) {
                    dataStorageManager.saveNewImage(newImageName);
                })
                .catch(function (err) {
                    console.log("Error occured", err);
                });
        });
    }

    this.saveBase64Image = function (base64Data) {
        let newImageName = uuid() + ".png";
        const newLargeImagePath = './server/images/large/' + newImageName;
        const newThumbImagePath = './server/images/thumb/' + newImageName;

        var base64DataToWrite = base64Data.replace(/^data:image\/png;base64,/, "").replace(/^data:image\/jpg;base64,/, "");

        fs.writeFileSync(newLargeImagePath, base64DataToWrite, 'base64');

        return sharp(newLargeImagePath).resize({ height: 30 }).toFile(newThumbImagePath)
            .then(function (newFileInfo) {
                dataStorageManager.saveNewImage(newImageName);
            })
            .catch(function (err) {
                console.log("Error occured", err);
            });
    }

    main();
};