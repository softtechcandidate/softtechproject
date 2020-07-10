const postHeaders = {
  'Content-Type': 'application/json',
};

const BE_URL = 'http://localhost:8090';

function GalleryManager() {
  this.fetchImages = function () {
    return fetch(`${BE_URL}/getImages`, {
      method: 'get',
      headers: postHeaders,
    }).then((response) => response.json()).then((jsonData) => {
      for (let i = 0; i < jsonData.length; i++) {
        jsonData[i].large = BE_URL + jsonData[i].large;
        jsonData[i].thumb = BE_URL + jsonData[i].thumb;
      }
      return jsonData;
    });
  };

  this.saveImage = function (file) {
    const formData = new FormData();
    formData.append('myFile', file);
    return fetch(`${BE_URL}/saveImage`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((success) => console.log(success))
      .catch((error) => console.log(error));
  };

  this.saveBase64Image = function (base64Data) {
    return fetch(`${BE_URL}/saveBase64Image`, {
      method: 'POST',
      headers: postHeaders,
      body: JSON.stringify({ base64Data }),
    })
      .then((response) => response.json())
      .then((success) => console.log(success))
      .catch((error) => console.log(error));
  };
}

export default GalleryManager;
