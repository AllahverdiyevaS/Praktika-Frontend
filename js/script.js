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
//   console.log(name)
// }
debugger

// let amount=1000;
// let newLine="\r\n";
// let message="1-Mebleg goruntule: "+newLine+"2-Pul kocurmer: "+newLine+"3-Pul cekme: "+newLine+"4-Cixis";
// let choose=prompt(message);
// switch (choose) {
//     case "1": alert(" mebleg: "+amount);
//         break;
//         case "2": let transferAmount=Number(prompt("Kocurmek istediyiniz meblegi daxil edin"));
//    amount+=transferAmount;
//    alert("Yeni mebleg: "+amount);
//    break;
//         case "3": let withdrawAmount=Number(prompt("Cekmek istediyiniz meblegi daxil edin"));
//         amount-=withdrawAmount;
//         alert("Qalan mebleg: "+amount);
//         break;
//     case "4": alert("Cixis edildi");
//         break;
//     default: alert("1 ile 4 arasi bir secim edin ");
//         break;
// }
for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
       console.log(i+"x"+j+"="+(i*j) );
   }
}