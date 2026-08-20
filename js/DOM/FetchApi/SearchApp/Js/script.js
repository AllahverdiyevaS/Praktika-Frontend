// var name = "Ali";
// const age = 25;
// let score = 91;
// let examPassed = true;
// console.log(name, age, score);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof examPassed);
// function functionScope(params) {
//   let fullName = "Ali Aliyev";
//   console.log(fullName);
// }

// functionScope();
// if (age > 18) {
//   const message = "You is adult";
//   console.log(message);
// }

// let number1 = "25";
// let number2 = "7";
// let sum = number1 + number2;
// let subtraction = number1 - number2;
// let multiplication = number1 * number2;
// let division = number1 / number2;
// let rest = number1 % number2;
// console.log(
//   sum,
//   subtraction,
//   multiplication,
//   division.toFixed(3),
//   rest.toFixed(3),
// );
// // const first = 7;
// // const second = "7";
// // console.log(first === second);
// // console.log(first == second);

// // const first = 1;
// // const second = 7;
// // console.log(first > second);
// // console.log(first < second);
// // console.log(first != second);

// isAdult = false;
// isHealthy = true;
// console.log(isAdult && isHealthy);
// console.log(isAdult || isHealthy);
// console.log(!isAdult);

// let number = 17;

// console.log((number += 1));
// console.log((number -= 3));
// console.log((number *= 4));
// console.log((number /= 5));
// console.log((number %= 5));

// --------------------------------------

// const number = 7;
// if (number % 2 === 0) {
//   console.log(" number is even");
// } else {
//   console.log("number is odd");
// }
// const score = 71;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score < 90 && score >= 70) {
//   console.log("Grade: B");
// } else if (score < 70 && score >= 50) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: D");
// }

// const hasTicket = false;
// const age = 37;
// if (age > 18 && hasTicket) {
//   console.log("giris icazeldii");
// } else {
//   if (age < 18) {
//     console.log("yas 18 yasdan asagidi");
//   } else if (!hasTicket) {
//     console.log("bilet yoxdu");
//   }
//   console.log("giris icazeli deyil");
// }
// switch (new Date().getDay()) {
//   case 1:
//     console.log("Monday");

//     break;
//   case 2:
//     console.log("Tuesday");

//     break;
//   case 3:
//     console.log("Wednesday");

//     break;
//   case 4:
//     console.log("Thursday");

//     break;
//   case 5:
//     console.log("Friday");

//     break;
//   case 6:
//     console.log("Saturday");
//   case 7:
//     console.log("Sunday");

//     break;
// }

// const password = "1hdfjfdndff7";
// if (password.length >= 10) {
//   console.log("strong password");
// } else if (password.length < 10 && password.length >= 6) {
//   console.log("normal password");
// } else {
//   console.log("weak password");
// }

// -------------------------------

// for (let index = 1; index <= 20; index++) {
//   console.log(index);
// }
// for (let index = 1; index <= 30; index++) {
//   if (index % 2 === 0) {
//     console.log(index);
//   }
// }
// for (let index = 1; index <= 30; index++) {
//   if (index % 2 !== 0) {
//     console.log(index);
//   }
// }
// for (let index = 1; index <= 50; index++) {
//   if (index % 3 == 0) {
//     console.log(index);
//   }
// }
// const string = prompt("Eded daxil edin");
// const stringToNumber = Number(string);
// const kvadrat = stringToNumber ** 2;
// console.log(kvadrat);
// const score = prompt("Balinizi daxil edin");
// if (score >= 80) {
//   console.log("Ela");
// } else if (score < 80 && score >= 50) {
//   console.log("Kecdiz");
// } else {
//   console.log("Kesildiz");
// }
// const number = Number(prompt("Eded daxil edin"));
// if (number % 2 === 0) {
//   console.log("eded cutdu");
// } else {
//   console.log("eded tekdir");
// }

// const number = Number(prompt("Eded daxil edin"));
// sum = 0;
// for (let index = 0; index <= number; index++) {
//   sum += index;
// }
// console.log(sum);
// --------------------------------------

// for (let index = 1; index <= 100; index++) {
//   if (index % 3 == 0) {
//     continue;
//   }
//   if (index == 50) {
//     break;
//   }
//   console.log(index);
// }

// let number = Number(prompt("Regem daxil edin"));
// let sum = 0;
// while (number !== 0) {
//   sum += number;
//   number = Number(prompt("Yeni regem daxil edin"));
// }
// console.log(sum);
// const cutEdedler = [];
// const tekEdeler = [];

// for (let index = 1; index <= 50; index++) {
//   if (index % 2 === 0) {
//     cutEdedler.push(index);
//   } else {
//     tekEdeler.push(index);
//   }
// }
// console.log("cut", cutEdedler);
// console.log("tek", tekEdeler);

// for (let index = 1; index <= 100; index++) {
//   if (index % 5 == 0) {
//     console.log(index);
//   }
// }
// let trueNumber = 7;
// let enterNumber;
// while (true) {
//   enterNumber = Number(prompt("1-10 eden daxil edin"));
//   if (trueNumber === enterNumber) {
//     console.log("Tebrikler");
//   } else {
//     console.log("sehv eddedi");
//   }
// }
// for (let index = 1; index <= 100; index++) {
//   if (index === 20) {
//     break;
//   }
//   console.log(index);
// }
// for (let index = 1; index <= 30; index++) {
//   if (index % 4 == 0) {
//     continue;
//   }
//   console.log(index);
// }
// let enterText;
// while (true) {
//   enterText = prompt("enter text");
//   if (enterText === "stop") {
//     break;
//   }
//   console.log(enterTaxt);
// }
for (let index = 10; index >= 1; index--) {
  console.log(index);
}
let sum = 0;
for (let index = 1; index <= 100; index++) {
  sum += index;
}
console.log(sum);
