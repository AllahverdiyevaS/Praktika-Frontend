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
'debugger'

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
        // <div class="main_container">
        //         <h1>6 + Examples of the Best Email Landing Page</h1>
        //         <p>
        //             Landingfolio features the best Mail Landing Page designs on the web.
        //             Browse more than 6 Email Landing Page examples, curated by us to
        //             ensure the highest quality.
            //   <span>
        //          span text
        //         </span>
        //         </p>
        //         <button>See More</button>
                {/* </div> */}

// let mainContainer=document.createElement('div');
// let heading=document.createElement('h1');
// let paragraph=document.createElement('p');
// let button=document.createElement('button');
// let span=document.createElement('span');

// mainContainer.className='main_container';
// heading.textContent='6 + Examples of the Best Email Landing Page';
// paragraph.textContent='Landingfolio features the best Mail Landing Page designs on the web. Browse more than 6 Email Landing Page examples, curated by us to ensure the highest quality.';
// span.textContent='span text';
// button.textContent='See More';
// mainContainer.appendChild(heading);
// mainContainer.appendChild(paragraph);
// paragraph.appendChild(span);
// mainContainer.appendChild(button);
// document.body.appendChild(mainContainer);
const container = document.createElement('div');


const button = document.createElement('button');
const buttonText=button.innerText = 'Loading';


container.appendChild(button);
document.body.appendChild(container);
function changeText() {
    const buttonChabged = document.createElement('button');
    buttonChabged.innerText = 'Completed';
    container.replaceChild(buttonChabged, button);
}
button.addEventListener('click', changeText);

document.addEventListener("keydown", function(event) {
    if (event.key === "F5") {
        event.preventDefault(); 

        
    }});