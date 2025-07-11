const inputData = document.querySelector("#photoSearch");
const form = document.querySelector("form");



form.addEventListener("submit", async function(e){
    e.preventDefault();
    deletePreviousImages();
    const data = inputData.value;
    const config = {headers: {Authorization: "Client-ID DdJfsfNO4-YFDEP3QpJNHITjs4-xAgeUb5HPZ4z8SHA"},
                    params: {query: data}};
    const req = await axios.get("https://api.unsplash.com/search/photos?", config);
    showImages(req.data.results)
})



const showImages = (photos) => {
  for (let photo of photos) {
    const img = document.createElement("img");
    img.src = photo.urls.small;
    document.body.appendChild(img);
  }
};

const deletePreviousImages = () => {
    const img = document.querySelectorAll("img");
    for(let images of img){
        images.remove();
    }
}


// axios.get("https://api.unsplash.com/search/photos?query=flowers", {
//   headers: {
//     Authorization: "Client-ID DdJfsfNO4-YFDEP3QpJNHITjs4-xAgeUb5HPZ4z8SHA"
//   }
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
