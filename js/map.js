const map = new Map();
map.set("shokolad", 10);
map.set("et", 20);
map.set("sud", 5);
map.set("duyu", 7);

for (let [key, value] of map) {
  const artim = value + 10;
  console.log(artim);
}
const arrayStudentsAssessments = [
  { id: 1, name: "Ali", assessments: 90 },
  { id: 2, name: "Sevinc", assessments: 78 },
  { id: 3, name: "Orxan", assessments: 85 },
  { id: 4, name: "Hasan", assessments: 75 },
];
const update = arrayStudentsAssessments.map((student) => ({
  ...student,
  assessments: student.assessments + 5,
}));
console.log(update);
const usersName = ["asma", "aydin", "omar", "jasmin"];
const result = usersName.map(
  (user) => user.charAt(0).toUpperCase() + user.slice(1),
);
console.log(result);

const productsName = ["sud", "konfet", "yag", "cay"];
const yeni = productsName.map((product) => `${product} yeni`);
console.log(yeni);

const salaries = [
  { id: 1, name: "Ali", salary: 2700 },
  { id: 2, name: "Sevinc", salary: 2000 },
  { id: 3, name: "Orxan", salary: 2400 },
  { id: 4, name: "Hasan", salary: 3700 },
];
const exchangeRate = 1.7;
const change = salaries.map((salary) => ({
  ...salary,
  salary: salary.salary * exchangeRate + " Azn",
}));
console.log(change);
const students = ["asma", "aydin", "omar", "jasmin", "esmer", "esmer"];
const unique = new Set(students);
console.log(unique);

const people = ["asma", "aydin", "omar", "jasmin", "esmer", "esmer"];
const uniqueSize = new Set(people);
console.log(uniqueSize.size);

const cities = new Set(["Baki", "Gence", "Qax", "Gebele"]);
console.log(cities.has("Baki"));
const fruits = new Set(["Alma", "Armud", "Ciyelek"]);
fruits.delete("Ciyelek");
console.log(fruits);
