// for (let index = 0; index < 21; index++) {
//   console.log(index);
// }
// for (let index = 0; index < 31; index += 2) {
//   console.log(index);
// }

// for (let i = 0; i < 31; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// for (let index = 1; index < 51; index++) {
//   if (index % 3 === 0) {
//     console.log(index);
//   }
// }
// const number = Number(prompt("bir eded daxil edin"));
// const quadrat = number ** 2;
// console.log(quadrat);
// const result = Number(prompt("balinizi daxil edin"));
// if (result > 80) {
//   console.log("ela");
// } else if (result > 50 && result < 81) {
//   console.log("kecdi");
// } else {
//   console.log("kesildi");
// }
// const num = Number(prompt("bir eded daxil edin"));
// if (num % 2 === 0) {
//   console.log("eded cutdu");
// } else {
//   console.log("eded tekdir");
// }
// const enterNumber = Number(prompt("eded daxil edin"));
// let summe = 0;
// for (let index = 1; index <= enterNumber; index++) {
//   summe += index;
// }
// console.log(summe);

// let num = Number(prompt("eded daxil edin:"));
// let sum = 0;
// while (num !== 0) {
//   sum = sum + num;
// }
// console.log(sum);

// let cut = 0;
// let tek = 0;
// for (let j = 1; j <= 50; j++) {
//   if (j % 2 == 0) {
//     cut += j;
//   } else {
//     tek += j;
//   }
// }
// console.log("cut ededler" + cut);
// console.log("tek ededler" + tek);

// for (let ededler = 5; ededler <= 100; ededler += 5) {
//   console.log(ededler);
// }
// let duzgunEded = 7;
// let daxilEdilenEded = Number(
//   prompt("duzgun ededi tapanakimi regem eded daxil edin"),
// );
// while (daxilEdilenEded !== duzgunEded) {
//   daxilEdilenEded = alert("yalnis ededdi");
// }

// let num1 = 1;
// while (num1) {
//   console.log(num1);
//   if (num1 == 20) {
//     break;
//   }
// }

// for (let a = 1; a <= 30; a++) {
//   if (a % 4 == 0) {
//     continue;
//   }
// }

// let daxilEdilenSoz = prompt("soz daxil edin,dayandirmaq istesez 'stop' yazin");
// while (daxilEdilenSoz !== "stop") {
//   daxilEdilenSoz = prompt("stop yaz");
// }
// for (let say = 10; say >= 1; say--) {
//   console.log(say);
// }

// let cemi = 0;
// for (let i = 1; i =< 100; i++) {
//   cemi+= i;
// }
// console.log(sum);
// let ball = Number(prompt("balinizi daxil edin"));
// function checkBall(ball) {
//   if (ball > 50) {
//     console.log("kecdiz");}
// else {
//     console.log("kesildiz");
//   }
// }
// checkBall(ball);

// ;
// function isPerfectNumber(num) {
//   let sum = 0;
//   for (let i = 2; i < num/2; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//     sum+=1+num;
//   }
//   if (sum=== num*2) {
//     console.log(num + " mukemmel bir sayidir.");
//   } else {
//     console.log(num + " mukemmel bir sayi degildir.");
//   }
// }
// console.log(isPerfectNumber(6));

// const button=document.createElement('button');
// button.innerText="Random Button"
// document.body.appendChild(button);
// button.addEventListener("click",function () {
//   const randomNumber=Math.random();
//   const paragraph=document.createElement('p');
//   paragraph.innerText=randomNumber;
//   document.body.appendChild(paragraph);
//   localStorage.setItem("randomNumber",randomNumber);
// localStorage.getItem("randomNumber");
// })
// const buttonClear=document.createElement('button');
// buttonClear.innerText="Clear Storage";
// document.body.appendChild(buttonClear);

// 17.05.2026----------------------------
// const array = [];
// for (let index = 0; index < 10; index++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   array.push(randomNumber);
// }

// const maxNumber = Math.max(...array);
// console.log("max number:", maxNumber);
// console.log(array);

// let cutEdedler = [];
// while (cutEdedler.length < 15) {
//   const randomNumber = Math.floor(Math.random() * 50) + 1;
//   if (randomNumber % 2 === 0) {
//     cutEdedler.push(randomNumber);
//   }
// }
// console.log(cutEdedler);

// let sum = 0;
// let array = [];

// for (let index = 0; index <= 20; index++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   array.push(randomNumber);
//   sum += randomNumber;
// }
// console.log(sum);

// console.log(array);
// let array = [];
// for (let index = 0; index <= 10; index++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   if (randomNumber > 10) {
//     array.push(randomNumber);
//   }
// }
// console.log(array);

// let array = [];
// for (let index = 0; index < 10; index++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   array.push(randomNumber);
// }
// let minNumber = Math.min(...array);
// console.log("min number:", minNumber);
// console.log(array);
// let array = [];
// for (let index = 0; index <= 10; index++) {
//   const randomNumber = Math.floor(Math.random() * 30) + 1;
//   if (randomNumber % 3 === 0) {
//     array.push(randomNumber);
//   }
// }
// console.log(array);

// let array = [];
// for (let index = 0; index < 15; index++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   array.push(randomNumber);
// }
// console.log(array);
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 !== 0) {
//     count++;
//   }
// }
// console.log("Tək ədədlərin sayı:", count);

// let array = [];
// for (let index = 0; index < 10; index++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   array.push(randomNumber * 2);
// }
// console.log(array);

// let array = [];
// for (let index = 0; index < 10; index++) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   array.push(randomNumber);
// }
// console.log(array);
// const reversedArray = array.reverse();

// console.log(reversedArray);
// const soz = "javascript";
// const arraySoz = soz.split("");
// for (let index = 0; index < arraySoz.length; index++) {
//   const element = arraySoz[index];
//   console.log(element);
// }

// const soz = "javascript";
// const tersineSoz = soz.split("").reverse().join("");
// console.log(tersineSoz);

// const today = new Date();
// const day = today.getDate();
// const month = today.getMonth() + 1;
// const year = today.getFullYear();
// console.log(day);
// console.log(month);
// console.log(year);
// const tarix1 = new Date("2023-05-17");
// const tarix2 = new Date("2023-06-17");
// const todaysDate = new Date();
// let yenTarix;
// if (todaysDate - tarix1 < todaysDate - tarix2) {
//   yenTarix = tarix1;
// } else {
//   yenTarix = tarix2;
// }
// console.log(yenTarix);

// let array = [];
// for (let index = 0; index < 10; index++) {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;

//   array.push(randomNumber);
// }
// console.log(array);
// let newArray = [];
// for (let index = 0; index < array.length; index++) {
//   if (array[index] > 5) {
//     newArray.push(array[index]);
//   }
// }
// console.log(newArray);

const sozHello = "hello world";
let herfSayi = 0;
let bosluqSayi = 0;
for (let index = 0; index < sozHello.length; index++) {
  if (sozHello[index] === " ") {
    bosluqSayi++;
  } else {
    herfSayi++;
  }
}
console.log("Hərf sayı:", herfSayi);
console.log("Boşluq sayı:", bosluqSayi);
