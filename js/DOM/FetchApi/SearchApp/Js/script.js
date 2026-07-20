var name = "Ali";
const age = 25;
let score = 91;
let examPassed = true;
console.log(name, age, score);
console.log(typeof name);
console.log(typeof age);
console.log(typeof examPassed);
function functionScope(params) {
  let fullName = "Ali Aliyev";
  console.log(fullName);
}

functionScope();
if (age > 18) {
  const message = "You is adult";
  console.log(message);
}

let number1 = "25";
let number2 = "7";
let sum = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let rest = number1 % number2;
console.log(
  sum,
  subtraction,
  multiplication,
  division.toFixed(3),
  rest.toFixed(3),
);
// const first = 7;
// const second = "7";
// console.log(first === second);
// console.log(first == second);

// const first = 1;
// const second = 7;
// console.log(first > second);
// console.log(first < second);
// console.log(first != second);

isAdult = false;
isHealthy = true;
console.log(isAdult && isHealthy);
console.log(isAdult || isHealthy);
console.log(!isAdult);

let number = 17;

console.log((number += 1));
console.log((number -= 3));
console.log((number *= 4));
console.log((number /= 5));
console.log((number %= 5));
