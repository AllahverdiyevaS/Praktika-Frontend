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

// let i = 1;
// while (i <= 100) {
//   console.log(i);

//   if (i % 3 == 0) {
//     i++;
//     continue;
//   }
//   if (i == 50) {
//     break;
//   }
//   i++;
// }
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

let number = Number(prompt("Bir rəqəm daxil edin "));
let result = true;

for (let i = 2; i < Math.floor(number / 2); i++) {
  if (number % i == 0) {
    result = false;
    i++;
    break;
  }
}

if (result) {
  alert(number + " Prime əddədir ");
} else {
  alert(number + " Prime Deyil");
}

// 01.04.2026

// function sum(a, b) {
//   return a + b;
// }
// const cemi = sum(5, 7);
// console.log(cemi);

// const inputAge = Number(prompt("yasinizi daxil edin"));
// function checkAge(age) {
//   if (age >= 18) {
//     console.log("adults");
//   } else {
//     console.log("child");
//   }
// }
// console.log(checkAge(inputAge));

// function isEven(num) {
//   if (num % 2 == 0) {
//     console.log("regem cutdur");
//   } else {
//     console.log("regem tekdir");
//   }
// }
// console.log(isEven(7));

// ?????
// function findNumber(arr, num) {
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element === num) {
//       console.log("Found");
//     }
//   }
//   console.log("NotFound");
// }
// console.log(findNumber([1, 5, 7], 7));

// function getDay(day) {
//   if (day === 1) {
//     return "Monday";
//   } else if (day === 2) {
//     return "Tuesday";
//   } else if (day === 3) {
//     return "Wednesday";
//   } else {
//     return "Invalid";
//   }
// }
// console.log(getDay(3));

// function multiply(num1, num2) {
//   const result = num1 * num2;
//   return result;
// }
// console.log(multiply(5, 7));

// function getFullName(name, surname) {
//   const fullName = name + " " + surname;
//   return fullName;
// }
// console.log(getFullName("Shafayat", "Allahverdiyeva"));

// function isPositive(eded) {
//   if (eded === 0) {
//     return "eded 0";
//   } else if (eded > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPositive(-7));
