//! Selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu")

//todo variables
let gelirler =0;

//? Ekle Formu 

ekleBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  gelirler = gelirler + Number (gelirInput.value) 
  //gelirInput.value="";
  ekleFormu.reset(); // formlara özel resetleme kodu.
  localStorage.setItem("gelirler", gelirler) // gelirler yukardaki degiskenle ayni degil. Sadece isim benzerligi yapildi.


})

window.addEventListener("load", ()=>{
  gelirler =  Number(localStorage.getItem("gelirler"));
})
