/* importaninge file from danu starts*/
let box=document.querySelector(".box");

let hstory=document.querySelector(".headingofstory")

let story=document.querySelector(".mhrstory");
/* importaninge file from danu endss*/

box.addEventListener("click",()=>{
    if(box.innerText=="English"){
    box.innerHTML="<div class='box' style='justify-content:flex-end;'>हिन्दी<div class='dot'style='margin-left:20%;'></div></div>";
    hstory.innerText="दीवाना सिंह दानू";
    story.innerHTML="<p>सिपाही दीवान सिंह डानू का जन्म 4 मार्च 1923 को उत्तराखंड के पिथौरागढ़ जिले के पुर्दम गांव में हुआ था। वे भारतीय सेना के एक बहादुर सैनिक बने और कुमाऊं रेजीमेंट की 4वीं बटालियन में सेवा की। पहले कश्मीर युद्ध के दौरान, विशेष रूप से बड़गाम की लड़ाई में उनकी वीरता और निस्वार्थता के लिए उन्हें महावीर चक्र से सम्मानित किया गया।<br><br><img src='Diwan-Singh-Danu.jpg' alt='Diwan singh Danu'><br>यह कहानी 3 नवंबर 1947 की है, जब पहला कश्मीर युद्ध चल रहा था। सिपाही दीवान सिंह डानू, जो कुमाऊं रेजीमेंट की 4वीं बटालियन के एक बहादुर सैनिक थे, बड़गाम, श्रीनगर के पास एक भयंकर युद्ध में शामिल थे। पाकिस्तानी कबायली बल, जिनकी संख्या 1,000 से अधिक थी, भारतीय सैनिकों पर हमला कर रहे थे। भारी संख्या में कम होने के बावजूद, सिपाही दीवान सिंह डानू और उनकी कंपनी, जिसका नेतृत्व मेजर सोमनाथ शर्मा कर रहे थे, ने हार नहीं मानी।<br><br>सिपाही दीवान सिंह डानू ने अपने साथियों के साथ बहादुरी से लड़ाई की, अपनी राइफल से सटीक निशाने लगाते हुए कई कबायली लड़ाकों को मार गिराया। जब उन्होंने देखा कि कबायली लड़ाके उनकी कंपनी पर पीछे से हमला करने की कोशिश कर रहे हैं, तो उन्होंने निडर होकर हमला किया, अपनी राइफल से गोलीबारी की और ग्रेनेड फेंके। उनकी वीरता ने कबायली लड़ाकों को पीछे हटने पर मजबूर कर दिया और उनके साथियों की जान बचाई।<br><br>युद्ध के दौरान, मेजर सोमनाथ शर्मा ने ब्रिगेड मुख्यालय को अपना अंतिम संदेश भेजा, जिसमें कहा,'दुश्मन केवल 50 गज की दूरी पर है। हम पूरी तरह से घिर चुके हैं। मैं एक इंच भी पीछे नहीं हटूंगा, बल्कि आखिरी सैनिक और आखिरी गोली तक लड़ाई करूंगा।' मेजर शर्मा की बहादुरी से प्रेरित होकर, सिपाही दीवान सिंह डानू ने भी दुश्मन पर हमला किया और अंत तक निस्वार्थ भाव से लड़ाई लड़ी।<br><br><img src='war.jpg' alt='war image animated'><br><br>वीरता के लिए सिपाही दीवान सिंह डानू को महावीर चक्र से सम्मानित किया गया। इस लड़ाई में, 15-22 भारतीय सैनिक शहीद हुए, जिनमें मेजर सोमनाथ शर्मा भी शामिल थे, और 26 सैनिक घायल हुए। दूसरी ओर, पाकिस्तानी कबायली बलों को भारी नुकसान हुआ, जिनमें 200 से अधिक लड़ाके मारे गए और 320 से अधिक घायल हुए। सिपाही दीवान सिंह डानू की कहानी भारतीय सैनिकों की बहादुरी और निस्वार्थता का प्रेरणादायक उदाहरण है।<br><br>दीवान सिंह डानू की स्मृति में बिर्थी, मुनस्यारी में एक राज्य उच्च विद्यालय स्थापित किया गया।<img src='dstatue.jpg' alt='statue of deevan singh'><br></p>"
    }
    
    
    else{
        box.innerHTML="<div class='box' ><div class='dot'></div>English</div>";
        hstory.innerText="Deevan Singh Danu";
        story.innerHTML="<p>Sepoy Dewan Singh Danu was born on March 4, 1923, in Purdam village of Pithoragarh, Uttarakhand. He went on to become a brave soldier of the Indian Army, serving in the 4th Battalion of the Kumaon Regiment. His bravery and selflessness during the First Kashmir War, particularly in the Battle of Badgam, earned him the Mahavir Chakra award.<br><br><img src='Diwan-Singh-Danu.jpg' alt='Diwan singh Danu'><br>This story dates back to November 3, 1947, during the First Kashmir War. Sepoy Dewan Singh Danu, a brave soldier of the 4th Battalion of the Kumaon Regiment, was in the midst of a fierce battle near Badgam, Srinagar. Pakistani tribal forces, numbering over 1,000, were attacking Indian soldiers. Despite being vastly outnumbered, Sepoy Dewan Singh Danu and his company, led by Major Somnath Sharma, refused to give up.<br><br>Sepoy Dewan Singh Danu fought valiantly alongside his comrades, firing precise shots from his rifle and killing several tribal fighters. When he spotted a group of tribal fighters attempting to attack his company from behind, he launched a fearless attack, firing his rifle and throwing grenades. His bravery repelled the tribal fighters and saved the lives of his comrades.<br><br>During the battle, Major Somnath Sharma sent his final message to Brigade Headquarters, saying, 'The enemy is only 50 yards away. We are completely surrounded. I will not retreat even an inch, but will fight till the last soldier and the last bullet.'Inspired by Major Sharma's bravery, Sepoy Dewan Singh Danu also attacked the enemy, fighting selflessly until the end.<br><br><img src='war.jpg' alt='war image animated'><br><br>For his bravery, Sepoy Dewan Singh Danu was awarded the Mahavir Chakra. In this battle, 15-22 Indian soldiers were martyred, including Major Somnath Sharma, and 26 were injured. On the other hand, the Pakistani tribal forces suffered heavy losses, with over 200 fighters killed and over 320 injured. Sepoy Dewan Singh Danu's story is an inspiring example of Indian soldiers' bravery and selflessness.<br><br>A state high school was established in Birthi, Munsyari, in honor of Deevan Singh Danu.<br><br><img src='dstatue.jpg' alt='statue of deevan singh'><br></p>"
    }
    
    
    
    
})
