var name = "Shafayat";
let number = 7;
const isDeveloper = true;
console.log(name, number, isDeveloper);
console.log(typeof name);
console.log(typeof number);
console.log(typeof isDeveloper);

var global = "Global";
function functionForScope() {
  const functionScope = "function Scope";
  console.log(functionScope);
  console.log(global);
}

functionForScope();
if (global) {
  const name = "This is global Scope";
  console.log(name);
}
