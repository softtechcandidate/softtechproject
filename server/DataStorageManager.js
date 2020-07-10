const fs = require("fs");
/* 
This class is responsible with gallery image information data
Currently I recorded it to file for ease of implementation but,
it can easily be replaced with a DB implementation while keeping
the same method interfaces. Changes will only be done in this file
rest of the project will remain unchanged.
*/
module.exports = function () {

    function main() {}

    this.getImages = function () {
        return JSON.parse(fs.readFileSync("./server/data.json", "utf8"))
    };

    this.saveNewImage = function (newImageName) {
        let storedImageData = JSON.parse(fs.readFileSync("./server/data.json", "utf8"));
        storedImageData.unshift({
            "large": "/images/large/" + newImageName,
            "thumb": "/images/thumb/" + newImageName
        });
        fs.writeFileSync("./server/data.json", JSON.stringify(storedImageData, null, 4));
    }

    main();
}