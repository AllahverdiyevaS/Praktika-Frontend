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

// ----------------------------

// const age = 25;
// function checkVariable() {
//   const name = "Ali";
// }

// console.log(name);
// console.log(age);
// isHealthy = true;
// if (age > 18) {
//   let isConditionTrue = true;
// }
// console.log(isConditionTrue);

// if (age > 18) {
//   var isConditionTrue = true;
// }
// console.log(isConditionTrue);

// let gun = "Bazar ertesi";
// switch (gun) {
//   case "Bazar ertesi":
//     console.log("bugun bazra ertesi");
//     break;
//   case "Çərşənbə":
//     console.log("bugun çərşənbə");
//     break;
//   case "Cumə":
//     console.log("bugun cumə");
//     break;
//   default:
//     console.log("bu gun bazar ertesi, çərşənbə ve ya cumə deyil");
// }
// let daxiEdilenGun = Number(prompt("gun daxil edin "));
// switch (daxiEdilenGun) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// let soz = "50";
// let num = 50;
// let result1 = soz + num;
// console.log(result1);
// let result2 = num + 50;
// console.log(result2);
// console.log(typeof soz);
// console.log(typeof num);

// let x = "100";
// console.log(Number(x));
// console.log(String(7));
// console.log(Boolean(0));

// let value = "123abc";
// console.log(Number(value));

// document.addEventListener("keydown", show);
// function show(event) {
//   console.log(event.key);
// }

// const input = document.createElement("input");
// document.body.appendChild(input);
// const text = document.createElement("p");
// document.body.appendChild(text);
// input.addEventListener("keyup", show);
// document.addEventListener("keydown", show);
// function show(e) {
//   text.textContent = input.value;
//   console.log(e.target.value);
// }

// document.addEventListener("keydown", run);
// function run(e) {
//   if (e.key === "Enter") {
//     console.log("message sent");
//   }
// }

// document.addEventListener("keydown", reng);
// function reng(e) {
//   if (e.key.toLowerCase() === "a") {
//     document.body.style.backgroundColor = "yellow";
//   }
// }
// document.addEventListener("keydown", yaz);
// function yaz(e) {
//   if (e.key === "ArrowUp") {
//     console.log("Up");
//   }
// }
// -------------------------------
// function add_number(a, b) {
//   return a + b;
// }
// const add_number = (a, b) => a + b;
const isNumberEven = (number) =>
  number % 2 === 0 ? log("even") : console.log("odd");
console.log(isNumberEven(5));

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];
const arraysNumbers = () => {
  arrayNumbers.forEach((number) => console.log(number));
};
console.log(arraysNumbers());

const word = "Hello World";
const stringLenght = (word) => word.length;
console.log(stringLenght(word));

const isNumberLarge = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};
console.log(isNumberLarge(5, 10, 3));
const arrayLoop = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
};
console.log(arrayLoop());

// const yourAge = Number(prompt("Yasinizi daxil edin"));
// const checkAge = (yourAge) =>
//   yourAge >= 18 ? console.log("Acces granted") : console.log("Accces denied");
// console.log(checkAge(yourAge));

const arrayNumberSum = () =>
  arrayNumbers.reduce((acc, number) => acc + number, 0);
console.log(arrayNumberSum());
