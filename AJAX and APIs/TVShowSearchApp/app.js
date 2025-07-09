const form = document.querySelector("form");

form.addEventListener("submit", async function (e){
    e.preventDefault();
    deletePreviousImages();
    const data = form.elements.query.value;
    const config = {params: {q: data}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    showImages(res.data);
}) 

const showImages = (shows) =>{
    for (let show of shows){
        if(show.show.image){
            const img = document.createElement("img");
            img.src = show.show.image.medium;;
            document.body.appendChild(img)
        }
    }
}

const deletePreviousImages = () => {
    const oldImages = document.querySelectorAll("img");
    oldImages.forEach(img => img.remove());
};