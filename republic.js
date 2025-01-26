/* importing index elements for hindi conversation*/
let wish=document.querySelector(".wish");

let line=document.querySelector(".line");

/* hover effect on language toggle starts*/
let box=document.querySelector(".box");
let dot=document.querySelector(".dot");


box.addEventListener("click",()=>{
    if(box.innerText=="English"){
    box.innerHTML="<div class='box' style='justify-content:flex-end;'>हिन्दी<div class='dot'style='margin-left:20%;'></div></div>";
    line.innerText="गणतंत्र दिवस की हार्दिक शुभकामनाएं। इस पवन अवसर पर मेरे ओर से आपको कुछ बहादुरों के किस्सों का छोटा सा उपहार, कृपया स्वीकार करे।";
    wish.innerHTML="<p class='wish'>76<sup>वे<sup></p><p style='margin-left:10%;color:#ff2a15;text-shadow:2px 2px 3px #ff4040;'> गणतंत्र दिवस<br><span style='margin-left:20%; color:white;text-shadow:2px 2px 4px blue;'>की</span><br><span style='color:green;text-shadow:2px 2px 3px green;display:block;'>हार्दिक शुभकामनाएं</span></p>";
    
    
    
    }
    else{
        box.innerHTML="<div class='box'><div class='dot'></div>English</div>";
        line.innerText="Heartfelt greetings on Republic Day! As we celebrate this momentous day, I'd like to share with you tales of courage and valor. A small token of appreciation from me to you.";
        wish.innerHTML="<p class='wish'>Happy <br><span id='span'>76<sup>th</sup></span><br><span id='span2'>Republic day</span>";
    }
});
/* hover effect on language toggle ends*/