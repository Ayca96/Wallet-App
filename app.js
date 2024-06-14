//! Selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu")

//todo variables
let gelirler =0;
let harcamaListesi = [];

//! Hesap Tablosu

const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

//! Harcama Formu
const harcamaFormu = document.getElementById("harcama-formu");
const harcamaAlaniInput = document.getElementById("harcama-alani");
const tarihInput = document.getElementById("tarih");
const harcamaInput = document.getElementById("kalan")


//? Ekle Formu 

ekleBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  gelirler = gelirler + Number (gelirInput.value) 
  //gelirInput.value="";
  ekleFormu.reset(); // formlara özel resetleme kodu.
  localStorage.setItem("gelirler", gelirler) // gelirler yukardaki degiskenle ayni degil. Sadece isim benzerligi yapildi.
  gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler)

})

window.addEventListener("load",()=>{
  gelirler = Number(localStorage.getItem("gelirler")) || 0
  gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler);
  tarihInput.valueAsDate = new Date()
})

harcamaFormu.addEventListener("submit", (e)=>{
e.preventDefault() // reload i önler
console.log(tarihInput.value);
const yeniHarcama = {
  id:new Date().getTime(), //! sistem saatini milisaniye olarak verir.
  tarih:new Date(tarihInput.value).toLocaleDateString(),
  miktar: harcamaInput.value,
  alan:harcamaAlaniInput.value,
}


harcamaListesi.push(yeniHarcama);
console.log(harcamaListesi);
harcamaFormu.reset()
tarihInput.valueAsDate = new Date()
})