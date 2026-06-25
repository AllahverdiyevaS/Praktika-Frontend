// console.log("Program basladi");
// console.log("Melumat yoxlanir");
// console.log("Melumat tesdiqlendi");
// console.log("Proqram bitdi");

// function hesabla(qiymet1, qiymet2) {
//   const netice = (qiymet1 + qiymet2) / 2;
//   console.log(netice);
// }
// const result = hesabla(70, 50);

// function alisVeris() {
//   console.log("Mehsulu sec");
//   console.log("odenis et");
//   console.log("qebzi goster");
// }
// alisVeris();

// function geydiyat(ad, email) {
//   console.log(`Ad :${ad}`);
//   console.log(`Email : ${email}`);
//   console.log("geydiyat tamamlandi");
// }

// geydiyat("Shafayat", "hfsdkj@outlook.com");

// function bankEmeliyati(balance, pul) {
//   console.log(`Balanc:${balance}`);
//   const yeniBalance = balance - pul;
//   console.log(`Balansinizdan ${pul} cixidli`);
//   console.log(yeniBalance);
// }
// bankEmeliyati(1000, 300);

// const container = document.createElement("div");
// const button = document.createElement("button");
// button.innerText = "Click";
// container.append(button);
// document.body.append(container);
// button.addEventListener("click", function click() {
//   console.log("duyme basildi");
//   setTimeout(() => {
//     console.log("yukleme tamamlandi");
//   }, 3000);
// });
// function mehsullarYuklenir() {
//   setTimeout(() => {
//     console.log("yuklenir...");

//     console.log("mehsullar yuklendi");
//   }, 4000);
// }
// mehsullarYuklenir();

// function sendMessage() {
//   console.log("messag gönderilir");
//   setTimeout(() => {
//     console.log("messaj ugurla gönderildi");
//   }, 2000);
// }
// sendMessage();
// function uploadPhoto() {
//   console.log("sekil yuklenir...");
//   if (true) {
//     setTimeout(() => {
//       console.log("sekil yuklendi");
//     }, 3000);
//   } else {
//     console.log("sekil yuklenemedi");
//   }
// }
// uploadPhoto();
// ----------------------------
// function checkData(callback) {
//   setTimeout(() => {
//     console.log("Melumat yoxlanilir");
//     callback();
//   }, 500);
// }
// function approved() {
//   setTimeout(() => {
//     console.log("melumat tesdiqlendi");
//   }, 1000);
// }
// checkData(approved);

function checkScore(qiymet1, qiymet2) {
  console.log((qiymet1 + qiymet2) / 2);
}
function resultScore(a, b, callback) {
  console.log("netice");

  callback(a, b);
}
resultScore(17, 25, checkScore);

function registration(callback) {
  setTimeout(() => {
    console.log("istifadeci geydiyatdan kecir");
    callback();
  }, 500);
}
function emailSended() {
  setTimeout(() => {
    console.log("Email gönderildi");
  }, 3000);
}
registration(emailSended);

function createOrder(callback) {
  setTimeout(() => {
    console.log("sifaris yaradilir");
    callback();
  }, 500);
}
function kuryer() {}
setTimeout(() => {
  console.log("kuryer cagirildi");
}, 1000);
createOrder(kuryer);

function endGame() {
  setTimeout(() => {
    console.log("oyun bitdi");
  }, 1000);
}
function game(callback) {
  setTimeout(() => {
    console.log("oyun basa catir");

    callback();
  }, 1000);
}
game(endGame);
const products = [
  { name: "süd", price: 5 },
  { name: "yag", price: 10 },
  { name: "et", price: 15 },
];
function addProduct(callback) {
  setTimeout(() => {
    products.push({ name: "pendir", price: 5 });
    callback(products);
  }, 500);
}
function productsLenght(array) {
  console.log(`Mehsul sayi: ${array.length}`);
}
addProduct(productsLenght);

function loading(callback) {
  setTimeout(() => {
    console.log("loading...");
    callback();
  }, 1000);
}
function endLoading(params) {
  console.log("yuklendi");
}
loading(endLoading);

// AJAX
const url = "https://jsonplaceholder.typicode.com/posts";
function getPosts(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onloadstart = () => {
    console.log("Loading...");
  };
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("Xeta bas verdi");
    }
  };
  xhr.send();
}
getPosts(url);

function getPostById(url, id) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${url}/${id}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}
getPostById(url, 1);

const usersUrl = "https://jsonplaceholder.typicode.com/users";
function users(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onloadstart = () => {
    console.log("Loading...");
  };

  xhr.onload = () => {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      console.log(users.length);

      users.forEach((user) => {
        console.log(`${user.name} ${user.email}`);
      });
    }
  };
  xhr.send();
}

users(usersUrl);

function handleClick() {
  getPosts(url);
}

const button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "sorgu gönder";
button.addEventListener("click", handleClick);
