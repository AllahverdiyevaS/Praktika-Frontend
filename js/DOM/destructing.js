// const user = {
//   name: "Ali",
//   age: 33,
// };
// const { name, age } = user;

// const student = { name: "Ali", course: "Frontend" };
// const { course } = student;
// console.log(course);
// const { name, course, age = 33 } = student;
// console.log(name, course, age);

// const studentsArray = ["Omar", "Aydin", "Asma", "Asmar", "Jasmin", "Tunar"];
// const [student1, student2, ...rest] = studentsArray;
// console.log(student1, student2, rest);
// const coursesArray = ["HTML", "CSS", "JavaScript"];
// const [first, , third] = coursesArray;
// console.log(first, third);
// const studentsCourses = [...coursesArray, ...studentsArray];
// console.log(studentsCourses);
// const array1 = [1, 2, 3];
// const array2=[...array1]
const object1 = { name: "Ali", age: 33 };
// const object2 = { ...object1, course: "Frontend" };

const objekt2 = { ...object1, name: "Asmar" };
console.log(object1);
console.log(objekt2);

const object = { name: "Ali", age: 33, course: "Frontend" };
// for (const key in object) {
//   console.log(key);
// }
// for (const key in object) {
//   console.log(object[key]);
// }
// for (const key in object) {
//   console.log(`${key}: ${object[key]}`);
// }

const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value);
}
const string = "Salam";
for (const char of string) {
  console.log(char);
}
let sum = 0;
for (const value of array) {
  sum += value;
}
console.log(sum);

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => number + 5);
console.log(newNumbers);

class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }
  showInfo() {
    console.log(`Telebe ${this.name} ${this.course} kursundadi`);
  }
}
const telebe1 = new Student("Shafayat", "Frontend Developer");
telebe1.showInfo();
telebe1.showInfo();

class Company {
  static companyName = "Windows";
}
console.log(Company.companyName);
