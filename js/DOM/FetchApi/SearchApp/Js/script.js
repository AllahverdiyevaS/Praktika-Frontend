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

const number = 7;
if (number % 2 === 0) {
  console.log(" number is even");
} else {
  console.log("number is odd");
}
const score = 71;

if (score >= 90) {
  console.log("Grade: A");
} else if (score < 90 && score >= 70) {
  console.log("Grade: B");
} else if (score < 70 && score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

const hasTicket = false;
const age = 37;
if (age > 18 && hasTicket) {
  console.log("giris icazeldii");
} else {
  if (age < 18) {
    console.log("yas 18 yasdan asagidi");
  } else if (!hasTicket) {
    console.log("bilet yoxdu");
  }
  console.log("giris icazeli deyil");
}
switch (new Date().getDay()) {
  case 1:
    console.log("Monday");

    break;
  case 2:
    console.log("Tuesday");

    break;
  case 3:
    console.log("Wednesday");

    break;
  case 4:
    console.log("Thursday");

    break;
  case 5:
    console.log("Friday");

    break;
  case 6:
    console.log("Saturday");
  case 7:
    console.log("Sunday");

    break;
}

const password = "1hdfjfdndff7";
if (password.length >= 10) {
  console.log("strong password");
} else if (password.length < 10 && password.length >= 6) {
  console.log("normal password");
} else {
  console.log("weak password");
}
