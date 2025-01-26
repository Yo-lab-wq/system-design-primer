/* importaninge file from datt starts*/
let box=document.querySelector(".box");

let hstory=document.querySelector(".headingofstory")

let story=document.querySelector(".mhrstory");
/* importaninge file from datt ends*/

box.addEventListener("click",()=>{
    if(box.innerText=="English"){
    box.innerHTML="<div class='box' style='justify-content:flex-end;'>हिन्दी<div class='dot'style='margin-left:20%;'></div></div>";
    hstory.innerText="नाइक ऊर्बा दत्त";
    story.innerHTML="<p>नायक उर्बा दत्त का जन्म उत्तराखंड के सुंदर शहर पिथौरागढ़ में श्री राम और रमा देवी के यहाँ हुआ था। हिमालय की गोद में पले-बढ़े नायक उर्बा दत्त को बचपन से ही साहस, त्याग और देशभक्ति की शिक्षा मिली।<br><br><img src='datt.jpg' alt='urba datt'><br><br>जैसे-जैसे वे बड़े हुए, उनके मन में देश की सेवा का जुनून बढ़ता गया। उन्होंने भारतीय सेना में भर्ती होकर अपने देश और उसके नागरिकों की सुरक्षा का संकल्प लिया।<br><br>1998 में, नायक उर्बा दत्त की यूनिट, 3 कुमाऊं, को जम्मू और कश्मीर के श्रीनगर में तैनात किया गया, जहाँ उन्हें बढ़ते आतंकवादी खतरों का सामना करना था। 23 फरवरी 1998 को, उनकी टीम को गुप्त सूचना मिली कि सलूर गाँव में कुछ आतंकवादी छिपे हुए हैं, जो वीआईपी काफिले पर हमला करने की योजना बना रहे थे।<br><br><img src='petrolling.jpg' alt='patrolling at night'><br><br>बिना समय गवाए, नायक उर्बा दत्त और उनकी टीम ने तुरंत कार्रवाई की। रात के अंधेरे में, उन्होंने सलूर गाँव के सोफी मोहल्ला को चारों ओर से घेर लिया, ताकि आतंकवादी भाग न सकें। तलाशी अभियान शुरू हुआ, और नायक उर्बा दत्त ने इसका नेतृत्व किया।<br><br>सुबह के समय, जब सूरज उग रहा था, नायक उर्बा दत्त और उनकी टीम ने अपनी तलाशी जारी रखी। घंटों तक तलाशने के बावजूद, उनका हौसला कम नहीं हुआ। अचानक, इलाके के एक आखिरी घर की छत पर घास के ढेर में कुछ हलचल हुई, जिस पर उनकी नज़र पड़ी।<br><br>क्षण भर में, नायक उर्बा दत्त ने कार्रवाई की। उन्होंने फायरिंग शुरू की, लेकिन आतंकवादी तुरंत प्रतिक्रिया देते हुए नाले में कूद गए और ब्रारी नंबल के जंगल की ओर भागने लगे।<br><br>अपनी जान की परवाह किए बिना, नायक उर्बा दत्त ने नाले में छलांग लगाई और आतंकवादियों का पीछा किया। गंभीर रूप से घायल होने के बावजूद, उन्होंने एक आतंकवादी को मार गिराया और दूसरे को घायल कर दिया, जो बाद में मारा गया।<br><br><img src='chasing.jpg' alt='running across river'><br><br>लेकिन नायक उर्बा दत्त की यह बहादुरी उनकी जान लेकर आई। वह गंभीर रूप से घायल हो गए और वीरगति को प्राप्त हुए। उनकी इस वीरता ने सभी को प्रेरित किया, और उन्हें मरणोपरांत 26 जनवरी 1999 को शौर्य चक्र से सम्मानित किया गया।<br><br>नायक उर्बा दत्त की कहानी भारतीय सैनिकों के बलिदान की मिसाल है, जो अपने देश की रक्षा के लिए अपनी जान की बाजी लगा देते हैं। उनकी बहादुरी और कर्तव्य के प्रति निष्ठा हमेशा आने वाली पीढ़ियों के लिए प्रेरणा का स्रोत बनी रहेगी।<br><br><p/>"
    
    }
    
    
    else{
        box.innerHTML="<div class='box' ><div class='dot'></div>English</div>";
        hstory.innerText="Naik Urba Datt";
        story.innerHTML="   <p class='mhrstory'>Naik Urba Datt was born in the picturesque town of Pithoragarh, Uttarakhand, to Shri Ram and Rama Devi. Growing up in the majestic Himalayas, Naik Urba Datt was instilled with values of courage, sacrifice, and patriotism.<br><br><img src='datt.jpg' alt='urba datt'><br><br>As he grew older, Naik Urba Datt's passion for serving his country only intensified. He joined the Indian Army, determined to protect his nation and its people from harm.<br><br>In 1998, Naik Urba Datt's unit, 3 Kumaon, was deployed in Srinagar, Jammu and Kashmir, to counter the growing terrorist threat. On February 23, 1998, his team received specific intelligence that a group of terrorists was hiding in Saloor village, planning to attack a convoy of VIPs passing through the area.<br><br><img src='petrolling.jpg'alt='patrolling at night'><br><br>Without hesitation, Naik Urba Datt and his team sprang into action. Under the cover of darkness, they swiftly cordoned off Sofi Mohalla in Saloor village, ensuring that the terrorists had no escape route. The search operation began, with Naik Urba Datt leading the charge.<br><br>As the sun rose over the horizon the next morning, Naik Urba Datt and his team continued their search. They had been searching for hours, but Naik Urba Datt's determination never wavered. Suddenly, while searching the last house in the locality, he noticed some suspicious movement in the heap of hay on the rooftop.<br><br>In a split second, Naik Urba Datt swung into action. He immediately opened fire, but the terrorists were quick to react. They jumped off the rooftop into the nearby Nala and began to flee towards the jungle of Brari Nambal.<br><br>Without caring for his own safety, Naik Urba Datt jumped into the Nala and chased after the terrorists. Despite being severely injured, he gunned down one militant and wounded another, who later succumbed to his injuries.<br><br><img src='chasing.jpg' alt='running across river'><br><br>However, Naik Urba Datt's bravery came at a great cost. He succumbed to his injuries and was martyred, leaving behind a legacy of courage and sacrifice. His actions that day inspired his comrades and earned him the Shaurya Chakra gallantry award posthumously on January 26, 1999.<br><br>Naik Urba Datt's story serves as a reminder of the sacrifices made by India's brave soldiers, who put their lives on the line to protect their country and its people. His bravery and devotion to duty will always be remembered as an inspiration to future generations.<br><br></p>"
    }
    
    
    
    
})
