const express = require("express");
const fileUpload = require('express-fileupload');
const cors = require('cors')
const bodyParser = require("body-parser");
const GalleryManager = require("./GalleryManager");
const DataStorageManager = require("./DataStorageManager");

let http;
let app;
const PORT = 8090;
let galleryManager;
let storageManager;

function main() {
    dataStorageManager = new DataStorageManager();
    galleryManager = new GalleryManager(dataStorageManager);
    configServer();
}

function configServer() {
    app = express();
    http = require("http").Server(app);
    app.use(cors());
    app.use(fileUpload());
    app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    http.listen(PORT, function () {
        console.log("Server is listening on *:" + PORT);
    });
    registerEndpoints();
}

function registerEndpoints() {
    app.use("/images", express.static("./server/images"));
    
    app.get("/getImages", handleGetImagesRequest.bind(this));
    app.post("/saveImage", handleSaveImage.bind(this));
    app.post("/saveBase64Image", handleSaveBase64Image.bind(this));
}

function handleGetImagesRequest(req, res) {
    res.send(galleryManager.getImages());
}

function handleSaveImage(req, res) {
    const newImage = req.files.myFile;
    galleryManager.saveImage(newImage).then(() => {
        res.send({ status: "OK" });
    });
}

function handleSaveBase64Image(req, res) {
    galleryManager.saveBase64Image(req.body["base64Data"]).then(() => {
        res.send({ status: "OK" });
    });
}

main();
