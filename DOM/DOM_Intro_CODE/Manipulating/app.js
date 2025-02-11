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

const tocnum = document.getElementsByClassName("tocnumber");
console.dir(tocnum);