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
//innerText : It basically shows the inner text inside of an HTML element (between the opening and closing tag)
const innerText = document.querySelector("p").inerText = "Hello pa kanna";
console.dir(innerText); 

//textContent : It's very similar to that of innerText, but textContent will show everything while innerText might not show everything that is modified using the CSS. Basically, it will show the content as it is like in the web-page.
const textContent = document.querySelector("#toc").textContent;
console.dir(textContent);

const boldText = document.querySelectorAll("b");
for (let boldWords of boldText){
    boldWords.innerText="I AM A BOLD TEXT!!"
}

//innerHTML : This is used to show all the HTML tags inside of an element which we use. We can also change the content inside the tag using HTML tags as HTML tags rather than it being just a string in innterText and textContent.

const innerHTML = document.querySelector("h1").innerHTML = "<i>Hello pa kanna</i>"; //This actually changes the HTML element to italic font

//Attributes

const changingID = document.querySelector("#banner").id = "mainPhoto"; //This will change the ID attribute of the element for which the ID belongs to
const changingIDAgain = document.querySelector("#mainPhoto").id = "banner"; //Changing the ID again, back to the default value we set

//getAttribute
const getAttribute = document.querySelector("#toc");
getAttribute.getAttribute("role"); //Will show if there is a value in the attribute you specified, else it will show null
getAttribute.setAttribute("href" , "https://google.com"); //It will add the new attribute to the HTML element


const inputLable = document.querySelector("input[type='text']");

//Changing styles of an element

const changingStyles = document.querySelector("h1");
changingStyles.style.color = "green";
changingStyles.style.fontSize = "500%";

const heading2 = document.querySelector("h2");
//To view the styles using JS, we can use window.getComputedStyles(tagName).cssProperties
