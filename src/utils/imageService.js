const BASE_URL = "/api/images/";

function uploadImage (info){
  return fetch(BASE_URL + 'createImage', {
    method: 'POST',
    headers: new Headers({
      "Content-Type": "application/json" 
    }),
    body: JSON.stringify(info)
  })
  .then(res => {
    return res.json();
  });
}

function getImages(req, res) {
  return fetch( BASE_URL + "getAllImages", {
    method: "GET",
  }).then( res => {return res.json()});
}

export default {
  uploadImage,
  getImages
}