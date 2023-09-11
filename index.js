let normal = document.querySelector(".show");
let password = document.querySelector(".password");
let click = 0;
normal.onclick = function (){
  if (normal.innerHTML === "Show"){
    click = 1
    password.setAttribute("type", "text");
    this.innerHTML ="Hide"
    return false;
  }else{
    click -= 1
    password.setAttribute("type", "password");
    this.innerHTML ="Show"
    return false;
  }
}
let si = document.querySelector(".si");
let btnsub = document.querySelector(".btnsub");

let mk1 = document.createElement("i");
let mk2 = document.createElement("i");
let mk3 = document.createElement("i");

let mk1Shown = false;
let mk2Shown = false;
let mk3Shown = false;

si.addEventListener("submit", function(eve) {
  let email = document.querySelector(".email").value;
  let First_Name = document.querySelector(".firstN").value;
  let last_Name = document.querySelector(".lastN").value;
  let password = document.querySelector(".password").value;
  const emailRegex = /^[a-z0-9]+@gmail\.com$/;


  if (emailRegex.test(email) && password.length >= 8 && First_Name != '' && last_Name != ''){
    console.log("okey");
    return true;
  } else if (emailRegex.test(email) == false){
    if (!mk3Shown) {
      mk3.classList.add("fa", "fa-xmark", "text-light");
      document.querySelector(".email").insertAdjacentElement('afterend', mk3);
      mk3Shown = true;
    }
    eve.preventDefault();
    return false;
  } else if (password.length < 8 ){
    eve.preventDefault();
  } else if (First_Name == ''){
    if (!mk1Shown) {
      mk1.classList.add("fa", "fa-xmark", "text-light");
      document.querySelector(".firstN").insertAdjacentElement('afterend', mk1);
      mk1Shown = true;
    }
    eve.preventDefault();
  } else if (last_Name == ''){
    if (!mk2Shown) {
      mk2.classList.add("fa", "fa-xmark", "text-light");
      document.querySelector(".lastN").insertAdjacentElement('afterend', mk2);
      mk2Shown = true;
    }
    eve.preventDefault();
  } else {
    console.log("error");
    eve.preventDefault();
  }
});
// let normal = document.querySelector(".show");
// let password = document.querySelector(".password");
// let click = 0;
// normal.onclick = function (){
//   if (normal.innerHTML === "Show"){
//     click = 1
//     password.setAttribute("type", "text");
//     this.innerHTML ="Hide"
//     return false;
//   }else{
//     click -= 1
//     password.setAttribute("type", "password");
//     this.innerHTML ="Show"
//     return false;
//   }
// }
// let si = document.querySelector(".si");
// let btnsub = document.querySelector(".btnsub");
// let smallEmail = document.createElement("small");
// let smallPassword = document.createElement("small");
// let smallfirst = document.createElement("small");
// let smalllast = document.createElement("small");
// si.addEventListener("submit", function(eve) {
//   let email = document.querySelector(".email").value;
//   let First_Name = document.querySelector(".firstN").value;
//   let last_Name = document.querySelector(".lastN").value;
//   let password = document.querySelector(".password").value;
//   const emailRegex = /^[a-z0-9]+@gmail\.com$/;
  
//   if (emailRegex.test(email) && password.length >= 8 && First_Name != '' && last_Name != ''){
//     console.log("okey");
//     return true;
//   } else if (emailRegex.test(email) == false){
//     smallEmail.innerHTML = "The email is not valid";
//     smallEmail.classList.add("text-light");
//     document.querySelector(".email").insertAdjacentElement('afterend', smallEmail);
//     eve.preventDefault();
//   } else if (password.length < 8 ){
//     smallPassword.innerHTML = "The password is not valid";
//     smallPassword.classList.add("text-light");
//     document.querySelector(".password").insertAdjacentElement('afterend', smallPassword);
//     eve.preventDefault();
//   } else if (First_Name == ''){
//     smallfirst.innerHTML = " First Name is Not Valid"
//     document.querySelector(".firstN").insertAdjacentElement('afterend', smallfirst);
//     smallfirst.classList.add("text-light");
//     eve.preventDefault();
//   } else if (last_Name == ''){
//     smalllast.innerHTML = " First Name is Not Valid";
//     document.querySelector(".lastN").insertAdjacentElement('afterend', smalllast);
//     smalllast.classList.add("text-light")
//     eve.preventDefault();
//   } else {
//     console.log("error");
//     eve.preventDefault();
//   }
// });