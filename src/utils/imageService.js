const BASE_URL = "/api/images/";

function getImages() {
  return fetch( BASE_URL + "getAllImages", {
    method: "GET",
  }).then( res => {
    return res.json()
  }).catch(err => console.log("ERROR", err))
}

function uploadImage (data){
  return fetch(BASE_URL + 'createImage', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => {
    return res.json();
  });
}

export default {
  getImages,
  uploadImage
}