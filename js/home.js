for (let index = 0; index < 21; index++) {
  console.log(index);
}
for (let index = 0; index < 31; index += 2) {
  console.log(index);
}

for (let i = 0; i < 31; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
for (let index = 1; index < 51; index++) {
  if (index % 3 === 0) {
    console.log(index);
  }
}
const number = Number(prompt("bir eded daxil edin"));
const quadrat = number ** 2;
console.log(quadrat);
const result = Number(prompt("balinizi daxil edin"));
if (result > 80) {
  console.log("ela");
} else if (result > 50 && result < 81) {
  console.log("kecdi");
} else {
  console.log("kesildi");
}
const num = Number(prompt("bir eded daxil edin"));
if (num % 2 === 0) {
  console.log("eded cutdu");
} else {
  console.log("eded tekdir");
}
const enterNumber = Number(prompt("eded daxil edin"));
let summe = 0;
for (let index = 1; index <= enterNumber; index++) {
  summe += index;
}
console.log(summe);
