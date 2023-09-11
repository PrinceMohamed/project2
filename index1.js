let h1jm = document.querySelector(".h1jm");
let p1jm = document.querySelector(".p1jm");
let pjm = document.querySelector(".pjm");
let h1j = "Hello , Sir.";
let p1j = "Welcome to our website! We are excited to help you plan your next flight. We believe that travel is a wonderful experience, and we want to make it an unforgettable one for you.";
let pj = "Start your journey with us today, and make it an experience you will never forget." ;
let index1 =1;
let index2 =1;
let index3 =1;
// ########################################
function writeh1jm(){
    h1jm.innerHTML=`${h1j.slice(0,index1)} |`
    index1++
};
setInterval(writeh1jm, 120);
h1jm.style.fontWeight ="bold"
// ########################################
function writep1jm(){
    p1jm.innerHTML=`${p1j.slice(0,index2)} `
    index2++
};
setInterval(writep1jm, 80);
// ########################################
function writepjm(){
    pjm.innerHTML=`${pj.slice(0,index3)} `
    index3++
};
setInterval(writepjm, 70);
let nav = document.querySelector(".navbar");
let btnnav = document.querySelector(".btnnav");
window.addEventListener("scroll", function(){
    if(window.scrollY > 200){
        nav.classList.remove("bg-body-tertiary");
        nav.classList.add("bg-warning");
        btnnav.classList.remove("btn-outline-success")
        btnnav.classList.add("btn-outline-light")
    }else{
        nav.classList.add("bg-body-tertiary");
        nav.classList.remove("bg-warning");
        btnnav.classList.add("btn-outline-success");
        btnnav.classList.remove("btn-outline-light");
    }
})
let tran1 = document.querySelector(".tran1");
window.addEventListener("scroll", function(){
    if(window.scrollY > 200){
      tran1.style.transform ="translate(0,0)"
    }
})
// ###############################
// let cir1 = document.querySelector(".hcount1");
// let cir2 = document.querySelector(".hcount2");
// let cir3 = document.querySelector(".hcount3");
// let cir4 = document.querySelector(".hcount4");
// let count1=1;
// let count2=1;
// let count3=1;
// let count4=1;
// function countc1(){
// if (parseInt(cir1.innerHTML) == 250){
//     clearInterval(set1)
// }else{
//     cir1.innerHTML=`${count1} K`;
//     count1++;
// }
// }
// let set1 = setInterval(countc1,20)
// // ################################################
// function countc2(){
// if (parseInt(cir2.innerHTML) == 20){
//     clearInterval(set2)
// }else{
//     cir2.innerHTML=`${count2} K`;
//     count2++;
// }
// }
// let set2 = setInterval(countc2,70)
// // ##########################################
// function countc3(){
// if (parseInt(cir3.innerHTML) == 12){
//     clearInterval(set3)
// }else{
//     cir3.innerHTML=`${count3} K`;
//     count3++;
// }
// }
// let set3 = setInterval(countc3,100)
// // ################################################
// function countc4(){
// if (parseInt(cir4.innerHTML) == 18){
//     clearInterval(set4)
// }else{
//     cir4.innerHTML=`${count4}`;
//     count4++;
// }
// }
// let set4 = setInterval(countc4,80)
// // ################################################
let trans2 = document.querySelector(".trans2");
let scro = false;
let cir2 = document.querySelector(".hcount2");
let cir3 = document.querySelector(".hcount3");
let cir4 = document.querySelector(".hcount4");
let count1=1;
let count2=1;
let count3=1;
let count4=1;
window.addEventListener("scroll", function (){
if (window.scrollY >500 && !scro){
    trans2.style.transform ="translate(0,0)";
    let cir1 = document.querySelector(".hcount1");
function countc1(){
if (parseInt(cir1.innerHTML) == 250){
clearInterval(set1)
}else{
cir1.innerHTML=`${count1} K`;
count1++;
}
}
let set1 = setInterval(countc1,300)
// ################################################
function countc2(){
if (parseInt(cir2.innerHTML) == 20){
clearInterval(set2);
}else{
cir2.innerHTML=`${count2} K`;
count2++;
}
}
let set2 = setInterval(countc2,100)
// ##########################################
function countc3(){
if (parseInt(cir3.innerHTML) == 12){
clearInterval(set3);
}else{
cir3.innerHTML=`${count3} K`;
count3++;
}
}
let set3 = setInterval(countc3,300)
// ################################################
function countc4(){
if (parseInt(cir4.innerHTML) == 18){
clearInterval(set4);
}else{
cir4.innerHTML=`${count4}`;
count4++;
};
};
let set4 = setInterval(countc4,180);
// ################################################
    }
});
let coins = document.querySelector(".coins");
window.addEventListener("scroll",function (){
    if (window.scrollY > 1200){
        coins.style.width ="100%"
    }
},);
let h11 = document.querySelector(".h11");
let conte5 = document.querySelector(".conte5");
conte5.appendChild(h11);
h11.classList.add("text-center");
h11.classList.add("mt-5");
let p1 = document.querySelector(".p1");
let parentDiv = p1.parentNode;
parentDiv.insertBefore(h11, p1);
// ###############################
let divs = document.querySelector(".fakra div");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let div4 = document.querySelector(".div4");
let div5 = document.querySelector(".div5");
let im1 = document.querySelector(".im1");
div1.style.background = "#000";
div1.addEventListener("click", function(){
    div1.style.background = "#000";
    div2.style.background = "#fff";
    div3.style.background = "#fff";
    div4.style.background = "#fff";
    div5.style.background = "#fff";
    h11.innerHTML="Travel for your business";
    p1.innerHTML="according to their personal needs and preferences. We provide reservation services and logistical arrangements, including hotel reservations, airline tickets and domestic transportation, to ensure a comfortable and integrated travel experience for customers.Our company relies on modern and advanced technology to facilitate the planning and reservation process, providing our customers with ease and flexibility in choosing and organizing their trips. We also provide ongoing customer support, ensuring accurate and detailed information on destinations, activities and services available";
    im1.src="../image/Un draw/undraw_businessman_9hq8.png";
});
div2.addEventListener("click", function(){
    div1.style.background = "#fff";
    div2.style.background = "#000";
    div3.style.background = "#fff";
    div4.style.background = "#fff";
    div5.style.background = "#fff";
    h11.innerHTML = "Travel to immigrate";
    p1.innerHTML="We provide a wide range of destinations and various tourist offers. We cater to clients' needs through customized tour packages and reliable logistic arrangements. We ensure a comfortable and easy customer experience through reservation services and logistics arrangements. We care about the customer experience from start to finish, and provide continuous support and follow-up to ensure their satisfaction. We use technology to facilitate the planning and booking process, and strive to provide a unique and distinctive experience for our customers.";
    im1.src="./undraw_Chilling_re_4iq9.png";
});
div3.addEventListener("click", function(){
    div1.style.background = "#fff";
    div2.style.background = "#fff";
    div3.style.background = "#000";
    div4.style.background = "#fff";
    div5.style.background = "#fff";
    h11.innerHTML="Travel for vacation";
    p1.innerHTML="We advance your application and approach the impossible about countries and destinations that offer excellent immigration opportunities you wish. We work with immigration experts and attorneys-at-laws to provide clients with the necessary information about immigration-related visas. We help clients prepare the documents required for them, make travel and accommodation arrangements, and provide language and cultural support in the target location. We are trying to pursue smooth immigration and a successful pioneering life, so that we can build a new country in a clear live broadcast.";
    im1.src="./undraw_Relaxation_re_ohkx.png";
});

div4.addEventListener("click", function(){
    div1.style.background = "#fff";
    div2.style.background = "#fff";
    div3.style.background = "#fff";
    div4.style.background = "#000";
    div5.style.background = "#fff";
    h11.innerHTML="Travel abroad to find work";
    p1.innerHTML="We take care of meeting the basic needs related to the search for work abroad, as we provide appropriate services to achieve this goal. We provide you with general guidance about the best medical destinations that offer excellent job opportunities in their professional fields. We provide comprehensive information about the labor market in optional destinations, including available opportunities, visa requirements, and residency. We help clients prepare the necessary documents, travel and accommodation prescriptions, which makes us move to a new country.";
    im1.src="./undraw_Speech_to_text_re_8mtf.png";
});

div5.addEventListener("click", function(){
    div1.style.background = "#fff";
    div2.style.background = "#fff";
    div3.style.background = "#fff";
    div4.style.background = "#fff";
    div5.style.background = "#000";
    h11.innerHTML="Travel to study";
    p1.innerHTML="Our services include comprehensive travel and accommodation arrangements for students, including flight bookings, accommodation in suitable accommodation and local transportation. We work closely with prestigious educational institutions and international universities to provide programs of study tailored to the needs of students.We guarantee an ideal study experience for our clients, as we care about providing a stimulating learning environment and excellent educational resources. We offer comprehensive support to students throughout their studies, including academic, social and language support."
    im1.src="./undraw_writer_q06d.png";
})
// let log = document.querySelector(".login");
// let sig = document.querySelector(".sigin");
// let create = document.querySelector(".create");
// let imtas = document.querySelector(".imtas");
// let asig = document.querySelector(".asig");
// let click = 0 ;
// create.addEventListener("click" , function (){
//     if (click == 2) {
//      imtas.style.transition ="1s";
//      imtas.style.right ="0";
//     }
//  })
// asig.addEventListener("click" , function (){
//    if (click == 1) {
//     imtas.style.transition ="1s";
//     imtas.style.left ="0";
//    }
// })