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
let ball = Number(prompt("balinizi daxil edin"));
function checkBall(ball) {
  if (ball > 50) {
    console.log("kecdiz");}
else {
    console.log("kesildiz");
  } 
}
checkBall(ball);

;
function isPerfectNumber(num) {
  let sum = 0;  
  for (let i = 2; i < num/2; i++) {
    if (num % i === 0) {
      sum += i;
    }
    sum+=1+num;
  }
  if (sum=== num*2) {
    console.log(num + " mukemmel bir sayidir.");
  } else {
    console.log(num + " mukemmel bir sayi degildir.");
  }
}
console.log(isPerfectNumber(6));