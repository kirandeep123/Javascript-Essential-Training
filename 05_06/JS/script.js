
const figure =document.querySelector(".featured-image");
const image = figure.querySelector("img");

var altText =image.getAttribute("alt");
// create an element 
var captionElement = document.createElement("figcaption");


captionElement.append(altText);
figure.append(captionElement);

figure.appendChild(captionElement);
image.setAttribute("alt","");
console.log(captionElement);


