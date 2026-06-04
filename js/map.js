// const map = new Map();
// map.set("shokolad", 10);
// map.set("et", 20);
// map.set("sud", 5);
// map.set("duyu", 7);

// for (let [key, value] of map) {
//   const artim = value + 10;
//   console.log(artim);
// }
// const arrayStudentsAssessments = [
//   { id: 1, name: "Ali", assessments: 90 },
//   { id: 2, name: "Sevinc", assessments: 78 },
//   { id: 3, name: "Orxan", assessments: 85 },
//   { id: 4, name: "Hasan", assessments: 75 },
// ];
// const update = arrayStudentsAssessments.map((student) => ({
//   ...student,
//   assessments: student.assessments + 5,
// }));
// console.log(update);
// const usersName = ["asma", "aydin", "omar", "jasmin"];
// const result = usersName.map(
//   (user) => user.charAt(0).toUpperCase() + user.slice(1),
// );
// console.log(result);

// const productsName = ["sud", "konfet", "yag", "cay"];
// const yeni = productsName.map((product) => `${product} yeni`);
// console.log(yeni);

// const salaries = [
//   { id: 1, name: "Ali", salary: 2700 },
//   { id: 2, name: "Sevinc", salary: 2000 },
//   { id: 3, name: "Orxan", salary: 2400 },
//   { id: 4, name: "Hasan", salary: 3700 },
// ];
// const exchangeRate = 1.7;
// const change = salaries.map((salary) => ({
//   ...salary,
//   salary: salary.salary * exchangeRate + " Azn",
// }));
// console.log(change);
// const students = ["asma", "aydin", "omar", "jasmin", "esmer", "esmer"];
// const unique = new Set(students);
// console.log(unique);

// const people = ["asma", "aydin", "omar", "jasmin", "esmer", "esmer"];
// const uniqueSize = new Set(people);
// console.log(uniqueSize.size);

// const cities = new Set(["Baki", "Gence", "Qax", "Gebele"]);
// console.log(cities.has("Baki"));
// const fruits = new Set(["Alma", "Armud", "Ciyelek"]);
// fruits.delete("Ciyelek");
// console.log(fruits);

// const name = "Allahverdiyeva";
// const firstName = "Shafayat";
// console.log(`Name: ${name}  Firstname: ${firstName}`);

// const product = "Telefon";
// const qiymet = 299;
// console.log(` ${product} cemi ${qiymet} AZN,  TELESIN!!!`);

// const studentName = "Ali";
// const studentScore = 91;
// console.log(`${studentName} imtahandan ${studentScore}  ball topladi`);

// const worker = "Ali";
// const position = "Frontend Developer";
// console.log(`Bu ${worker}dir, O ${position} vezifesinde calisir`);

const students = ["asma", "aydin", "omar", "jasmin", "esmer", "esmer", "asma"];
const unique = new Set(students);
// console.log(unique);
// for (student of unique) {
//   console.log(student.charAt(0).toUpperCase() + student.slice(1));
// }
// const employees = ["Asma", "Aydin", "Omar", "Jasmin"];
// const result = employees.map((employer) =>
//   console.log(`Salam men ${employer}`),
// );
// const cities = ["Baki", "Gence", "Qax", "Gebele", "Baki"];
// const update = new Set(cities);
// for (city of update) {
//   console.log(`  ${city} siyahida mövcuddur`);
// }
// const mehsullar = [
//   { name: "süd", qiymet: 5 },
//   { name: "bal", qiymet: 35 },
//   { name: "toyuq", qiymet: 7 },
//   { name: "yumurta", qiymet: 5 },
// ];
// mehsullar.map(({ name, qiymet }) => {
//   const yeniQiymet = qiymet + 5;
//   console.log(` ${name} mehsulun qiymeti ${yeniQiymet} AZN  oldu`);
// });

const arrayStudents = Array.from(unique);

const result = arrayStudents.map((student) => {
  const formattedName = student.charAt(0).toUpperCase() + student.slice(1);

  return `Xos gelmisen ${formattedName}`;
});

console.log(result);
