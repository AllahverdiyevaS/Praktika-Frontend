// var name = "Shafayat";
// let number = 7;
// const isDeveloper = true;
// console.log(name, number, isDeveloper);
// console.log(typeof name);
// console.log(typeof number);
// console.log(typeof isDeveloper);

// var global = "Global";
// function functionForScope() {
//   const functionScope = "function Scope";
//   console.log(functionScope);
//   console.log(global);
// }

// functionForScope();
// if (global) {
//   const name = "This is global Scope";
//   console.log(name);
// }

const num1 = 7;
const num2 = 5;
const sum = num1 + num2;
const difference = num1 - num2;
const multiplizieren = num1 * num2;
const dividieren = num1 / num2;
const rest = num1 % num2;
console.log(sum, difference, multiplizieren, dividieren, rest);
const a = 1;
const b = 4;
if (a > 0 && b > 0) {
  console.log(true);
}
if (a > 1 || b > 0) {
  console.log(true);
}
if (a != b) {
  console.log("a not = b");
}
const string = "7";
const number = 7;
isTrue = string === number;
console.log(isTrue);
isFalse = string == number;
console.log(isFalse);
const more = 9 > 7;
const small = 5 < 7;
console.log(more, small);
let i = 7;

console.log(i, (i += 1), (i -= 1), (i *= 2), (i /= 2));
let akku = 20;
if (akku <= 20) {
    console.log("zaradka 20% asagidi");
} else {
    console.log("zaradka 20% ustundedi");
}
let mebleg = 200;
if (mebleg >= 100) {
    console.log("siz 10% ebdirim qazandiz");
} else {
    console.log("10% endirim qazanmaq ucun 100 manatliq alis veris edin");
}
let sifre = "12345";
let daxilEdilenSifre = "12345";
if (sifre === daxilEdilenSifre) {
    console.log("sifre duzgundur");
} else {
    console.log("sifre duzgun deyil");
}
let havaDurumu = "yagislidi";
if (havaDurumu === "yagislidi") {
    console.log("yagisli hava ucun cetir goturun");
} 
else if (havaDurumu === "gunesli") {
    console.log("gunesli hava ucun eynək goturun");
}
else {
    console.log("evde qalin");
}

const myNumber=Number(prompt("bir eded daxil edin"));
if(myNumber%2===0){
    console.log("daxil edilen eded cutdur");
}else{    console.log("daxil edilen eded tekdir");
}
const netice=71;
if(netice>=90){
    console.log("A");
}
else if(netice>=70 && netice<90){
    console.log("B");
}
else if(netice>=50 && netice<70){
    console.log("C");
}
else{
    console.log("Fail");
}
const ageVisitor=25
let bilet=true;
if (ageVisitor>18 && bilet){
    console.log("giris icazelidi");
    if (!bilet) {console.log("biletiniz yoxdur");}
      
    }

else{console.log("giris qadağandır");
}
const hefteGunleri=Number(prompt("hefte gunu daxil edin"));
switch (hefteGunleri) {
    case 1: console.log("Bazar ertesi");
        break;
        case 2: console.log("Cersenbe axsamı");
        break;    
        case 3: console.log("Cersenbe");
        break;  
        case 4: console.log("Cume axsamı");
        break;
        case 5: console.log("Cume");
        break;
        case 6: console.log("Senbe");
        break;
        case 7: console.log("Bazar");
        break;
    default: console.log("Duzgun daxil edin");
        break;
}
const pasword="fzudwte65wd6743etz";
if(pasword.length<=6){
    console.log("Weak password");
}
else if(pasword.length>6 && pasword.length<=10){
    console.log("Medium password");
}
else{
    console.log("Strong password");
}