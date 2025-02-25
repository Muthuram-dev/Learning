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

//Changing styles of an element NOTE: This will change the style of the element in the inline style sheet, not in the external style sheet, which we don't want.

const changingStyles = document.querySelector("h1");
changingStyles.style.color = "green";
changingStyles.style.fontSize = "500%";

const allLinks = document.querySelectorAll("a");
for (let link of allLinks){
    link.style.color = "red";
}

//To get the style of an element, we can use window.getComputedStyle(tagName).cssProperties
const h1 = document.querySelector("h1");
console.log(window.getComputedStyle(h1).fontSize);
console.log(window.getComputedStyle(h1).fontFamily);

//CLASS LIST
const h2 = document.querySelector('h2');
console.log(h2.classList.add('purple')); //THis will add the class purple to the element
console.log(h2.classList.add('border')); //Will add the class border into the element h2
console.log(h2.classList.remove('border')); //Will remove the class border from the element h2

//OTHER PROPERTIES AND METHODS

//Parent element
const firstBold = document.querySelector('b');
console.log(firstBold.parentElement);
console.log(firstBold.parentElement.parentElement);
console.log(firstBold.parentElement.parentElement.parentElement); //YOu can just keep on doing this get the parent elements from an element

const para = firstBold.parentElement;
console.log(para.children);

//CREATING A NEW ELEMENT USING JS IN THE WEB PAGE

const newImg = document.createElement('img');
newImg.src = "https://picsum.photos/id/237/200/300";
// newImg.setAttribute('class', 'square');
newImg.className = "square";
document.body.appendChild(newImg); //THis will add the new element we created in the very end of the page