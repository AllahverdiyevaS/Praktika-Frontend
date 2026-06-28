console.log("Program basladi");
console.log("Melumat yoxlanir");
console.log("Melumat tesdiqlendi");
console.log("Proqram bitdi");

function hesabla(qiymet1, qiymet2) {
  return (qiymet1 + qiymet2) / 2;
}
const result = hesabla(70, 50);
console.log(result);

function alisVeris() {
  console.log("Mehsulu sec");
  console.log("odenis et");
  console.log("qebzi goster");
}
alisVeris();

function geydiyat(ad, email) {
  console.log(`Ad :${ad}`);
  console.log(`Email : ${email}`);
  console.log("geydiyat tamamlandi");
}

geydiyat("Shafayat", "hfsdkj@outlook.com");

function bankEmeliyati(balance, pul) {
  console.log(`Balanc:${balance}`);
  const yeniBalance = balance - pul;
  console.log(`Balansinizdan ${pul} cixidli`);
  console.log(yeniBalance);
}
bankEmeliyati(1000, 300);

const container = document.createElement("div");
const button = document.createElement("button");
button.innerText = "Click";
container.append(button);
document.body.append(container);
button.addEventListener("click", function click() {
  console.log("duyme basildi");
  setTimeout(() => {
    console.log("yukleme tamamlandi");
  }, 3000);
});
function mehsullarYuklenir() {
  setTimeout(() => {
    console.log("yuklenir...");

    console.log("mehsullar yuklendi");
  }, 4000);
}
mehsullarYuklenir();

function sendMessage() {
  console.log("messag gönderilir");
  setTimeout(() => {
    console.log("messaj ugurla gönderildi");
  }, 2000);
}
sendMessage();
function uploadPhoto() {
  console.log("sekil yuklenir...");
  if (true) {
    setTimeout(() => {
      console.log("sekil yuklendi");
    }, 3000);
  } else {
    console.log("sekil yuklenemedi");
  }
}
uploadPhoto();
