const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date =new Date();
    let hr =date.getHours();
    let min =date.getMinutes();
    let sec =date.getSeconds(); 
    
    let hrPosition =(hr*360/12)+ (min *(360/60)/12);
    let minPosition=(min*360/60) +(sec *(360/60)/60);
    let secPostion=sec *360/60;
    
    console.log(hr +" - " +min +" - " +sec );
    

function runClock(){
    hrPosition =hrPosition+(30/3600); /*360/12 =30 and 3600 seconds in 1 hour )*/
    minPosition =minPosition+(6/60) /* (1/60)of 6*/ ;
    secPostion=secPostion + 6 /*360/60*/ ;


    HOURHAND.style.transform ="rotate(+" +hrPosition+"deg)";
    MINUTEHAND.style.transform ="rotate(+" +minPosition+"deg)";
    SECONDHAND.style.transform ="rotate(+" +secPostion+"deg)";
    
}

setInterval(() => {
    runClock()
}, 1000);


 


