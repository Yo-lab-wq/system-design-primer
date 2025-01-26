/* importing items from list*/
let heading=document.querySelector(".hoflist");

let mhr=document.querySelector("#mhr");

let danu=document.querySelector("#danu");

let datt=document.querySelector("#datt");

let thought=document.querySelector(".thought");

let nsg=document.querySelector("#nsg");
/* hover effect on language toggle starts*/
let box=document.querySelector(".box");
let dot=document.querySelector(".dot");


box.addEventListener("click",()=>{
    if(box.innerText=="English"){
    box.innerHTML="<div class='box' style='justify-content:flex-end;'>हिन्दी<div class='dot'style='margin-left:20%;'></div></div>";
    heading.innerText="संग्रह";
    mhr.innerHTML="<a href='mhr.html' target='blank' id='mhr'> <div class='outterdiv'> <div class='innerdiv'> <img src='bayonet 2.jpg'> </div> <br>संगीन लड़ाकू</div> </a>";
    
    danu.innerHTML="<a href='ddanu.html' target='blank' id='danu'>            <div class='outterdiv'>              <div class='innerdiv'>           <img src='war.jpg'>          </div>            <br> पुरदम से योद्धा</div>         </a>";
    
    nsg.innerHTML="<a href='gajendra.html'target='blank' id='nsg'>  <div class='outterdiv'><div class='innerdiv'><img src='bg.jpg'> </div><br> बहादुर एन.एस.जी </div></a>";
    
    datt.innerHTML="<a href='datt.html' target='blank' id='datt' > <div class='outterdiv'> <div class='innerdiv'><img src='chasing.jpg'></div><br> नाइक उर्बा दत्त</div></a>";
    
    thought.innerText="आज के दिन, मैं आपके सामने हमारे स्थानीय नायकों की कहानी लेकर आया हूँ। मैंने अपनी पूरी कोशिश की है कि आपको उनके बारे में सब कुछ बता सकूँ। आशा है कि आपको यह जानकारी पसंद आएगी ।";
    }
    
  else
  {
    box.innerHTML="<div class='box'><div           class='dot'></div>English</div>";
    heading.innerText="collection";
    mhr.innerHTML="<a href='mhr.html' target='blank' id='mhr'> <div class='outterdiv'>  <div class='innerdiv'> <img src='bayonet 2.jpg'></div><br>The Bayonet Fighter  </div> </a>";
    
    danu.innerHTML="<a href='ddanu.html' target='blank'id='danu'>             <div class='outterdiv'>              <div class='innerdiv'>                <img src='war.jpg'>              </div>             <br>              Warrior From Purdam            </div>         </a>";
   nsg.innerHTML="<a href='gajendra.html'target='blank' id='nsg'>  <div class='outterdiv'><div class='innerdiv'><img src='bg.jpg'> </div><br> Bravo NSG</div></a>" ;
   datt.innerHTML="<a href='datt.html' target='blank' id='datt' > <div class='outterdiv'>            <div class='innerdiv'>                <img src='chasing.jpg'>             </div>            <br>            Naik Urba datt            </div>         </a>";
   
   thought.innerText="On this day I tried to provide you some information about our local hero's.I tried my best to tell you all I know or I collected.Hope you like it.";
    
}

})
