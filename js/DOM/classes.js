// class Student {
//   constructor(name, age, score) {
//     this.name = name;
//     this.age = age;
//     this.score = score;
//   }
// }
// const student1 = new Student("Ali", 25, 90);
// console.log(student1);

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}
const car1 = new Car("Toyota", "toyota", 2026);
console.log(car1);

class Employeer {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}
const employeer1 = new Employeer("Ali", "Frontend Developer", 5000);
console.log(employeer1);

class Book {
  constructor(titel, author, pages) {
    this.titel = titel;
    this.author = author;
    this.pages = pages;
  }
}
const book1 = new Book("Suc ve Ceza", "Fyodor Dostoevsky", 500);
console.log(book1);
class Phone {
  constructor(model, price, color) {
    this.model = model;
    this.price = price;
    this.color = color;
  }
}
const phone1 = new Phone("iPhone 12", 999, "Black");
console.log(phone1);

class Person {
  constructor(name, age, gender, height, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }
  eat() {
    console.log(`${this.name} yemek yeyir`);
  }
  think() {
    console.log(`${this.name} dusunur`);
  }
}
const person1 = new Person("Ali", 30, "Male", 180, 75);
console.log(person1);
person1.eat();
person1.think();

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Hesaba ${amount} manat elave olundu. Cari balans: ${this.balance} manat.`,
    );
  }
}

const account1 = new BankAccount("123456789", 700);
console.log(account1);
account1.deposit(500);

class Animal {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
}
const animal1 = new Animal("Murka", "Cat", 5);
console.log(animal1);

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
const student1 = new Student("Ali", 15, "A");
console.log(student1);

class Teacher {
  constructor(name, subject, experience) {
    this.name = name;
    this.subject = subject;
    this.experience = experience;
  }
}
const teacher1 = new Teacher("Orhan", "Mathematics", 10);
console.log(teacher1);

class Product {
  constructor(name, price, category, description) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
  }
}
const product1 = new Product("Garnier", 5, "Baxim", "El ucun krem");
console.log(product1);

const valuesLength = Object.values(person1).length;
console.log(valuesLength);

const keys = Object.keys(product1);
console.log(keys);

const teacherValues = Object.values(teacher1).includes("Orhan");
console.log(teacherValues);

class User {
  static count = 0;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  addUser() {
    User.count++;
  }
}
const user1 = new User("ALi", "ali@gmail.com", "123456");
user1.addUser();
console.log(User.count);
user1.addUser();
console.log(User.count);

const valuesCar1 = Object.values(car1);
console.log(valuesCar1);
