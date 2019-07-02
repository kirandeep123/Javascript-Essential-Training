const element =document.querySelector(".cta a");

if(element.hasAttribute('target')){
console.log(element.getAttribute('target'));
}
else{
    element.setAttribute("target", "_blank");
}
console.log(element.attributes);