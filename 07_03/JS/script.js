
const CTA = document.querySelector(".cta a");
const Alert =document.querySelector("#booking-alert");

CTA.classList.remove("hide");
Alert.classList.add("hide");

function reveral(){
    e.preventDefault();
    CTA.classList.toggle("hide");
    Alert.classList.toggle("hide");
}

//CTA.onclick =reveral;
CTA.addEventListener("click",function(e){
    e.preventDefault();
    CTA.classList.toggle("hide");
    Alert.classList.toggle("hide"); 
});

