const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
   // CTA.classList.toggle("hide");
current.innerHTML =="Book Now!" ? current.innerHTML="oopsss" :current.innerHTML="Book Now";
    ALERT.classList.toggle("hide");
}

CTA.addEventListener('click', function(e){reveal(e,this);}, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
