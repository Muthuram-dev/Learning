//SELECTING IN DOM
//Select by ID

const banner = document.getElementById("banner"); //Get's the element that is under the ID banner and store that to a variable
console.dir(banner); //Show's the object model of the element with all it's properties

//Select by tagNames

const images = document.getElementsByTagName("img");
console.dir(images);

//Manipulating the images using the JS object mode.
// for (image of images){
//     image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

//Selecy by class name
const tocnum = document.getElementsByClassName("square");

//QUERY SELECTOR

//We can also select elements in our web-page through query selector in which we need to specify the elements in the parameter through writing CSS wordings inside the parameter.
const heading = document.querySelector("h1"); // tag selector
console.dir(heading);
const tocElement = document.querySelector("#toc"); // ID selector
console.dir(tocElement);
const allImages = document.querySelector(".square");

//QUERY SELECTOR ALL
const links = document.querySelectorAll("p a");
for (let link of links){
    console.log(link.href);
    
}





//MANIPULATING IN DOM

