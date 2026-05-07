// let button = document.getElementById("button");
// let buttonText = (button.innerHTML = "Click");
// console.log(button);
// console.log(buttonText);
// let paragraph = document.querySelector("p");
// paragraph.style.color = "green";
// const list = document.querySelectorAll("li");
// list.forEach(function (item) {
//   item.style.color = "blue";
//   item.innerHTML = "list";
// });
// console.log(list);
// const containerForButton = document.querySelector(".container_for_button");

// button.addEventListener("click", function () {
//   containerForButton.style.backgroundColor = "yellow";
// });
// const heading = document.querySelector("h1");
// heading.style.fontSize = "1rem";
// containerForButton.style.backgroundColor = "aqua";

// const buttonForInput = document.querySelector(".button_for_input");
// const input = document.querySelector("input");

// const paragraphForInput = document.querySelector(".paragraph_for_input");
// buttonForInput.addEventListener("click", function () {
//   let inputText = input.value;
//   paragraphForInput.innerHTML = inputText;
//   input.value = "";
// });
// let counterButton = document.querySelector("#counter");
// let display = document.querySelector(".display");
// // let containerForCount = document.querySelector(".count");
// // let count = 0;
// // counterButton.addEventListener("click", function () {
// //   count++;
// //   containerForCount.textContent = count;
// // });
// counterButton.addEventListener("click", function () {
//   display.style.display = "none";
// });
/////////////////////////////////////////////////////////////
const button = document.createElement("button");
button.innerText = "Click me";
document.body.appendChild(button);
// button.addEventListener("click", function () {
//   const text = document.createElement("p");
//   text.innerText = "Hello World";
//   document.body.appendChild(text);
// });
// button.addEventListener("click", function () {
//   button.style.backgroundColor = "red";
// });
const container = document.createElement("div");
container.style.width = "300px";
container.style.height = "300px";
container.style.backgroundColor = "blue";
document.body.appendChild(container);
// container.addEventListener("mouseenter", function () {
//   container.style.backgroundColor = "yellow";
// });
// container.addEventListener("mouseleave", function name(params) {
//   container.style.backgroundColor = "blue";
// });
const textInput = document.createElement("input");
document.body.appendChild(textInput);

// textInput.addEventListener("click", function () {
//   const text = document.createElement("p");
//   text.innerHTML = textInput.value;
//   document.body.appendChild(text);
//   textInput.value = "";
// });

// textInput.addEventListener("click", function name(params) {
//   const text = document.createElement("p");
//   text.innerHTML = textInput.value.length;
//   document.body.appendChild(text);
// });

// textInput.addEventListener("keydown", function name(event) {
//   console.log(event.key);
//   console.log(event.keyCode);
// });

// button.addEventListener("dbclick", function name(params) {
//   button.style.display = "none";
// });???

// button.addEventListener("click", function () {
//   const text = document.createElement("p");
//   text.innerText = "Yeni bir paragraf";
//   document.body.appendChild(text);
// });

const image = document.createElement("img");
image.src =
  "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS5gM-ZQehJdBWYB0IvRXIR46BauOt10jy5lC9qaTVDil2VHIE5c3s_5VUGfZ-ILLgh8mDFNpOIAA7As4cYcSNnEn-rrqzf67B6QSRCU_rKIDhsdTEsFf-LUQ&usqp=CAc";
document.body.appendChild(image);
image.addEventListener("mouseenter", function name(params) {
  image.style.transform = "scale(1.5)";
  image.style.transition = "transform 0.5s ease";
});

image.addEventListener("mouseleave", function name(params) {
  image.style.transform = "scale(1)";
  image.style.transition = "transform 0.5s ease";
});

textInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    const text = document.createElement("p");
    text.innerHTML = textInput.value;
    document.body.appendChild(text);
  }
});

// container.addEventListener("mousemove", function (event) {
//   console.log(event.offsetY);
//   console.log(event.offsetX);
// });

// count = 0;
// const countContainer = document.createElement("p");

// document.body.appendChild(countContainer);
// function increase() {
//   count++;
//   countContainer.innerText = count;
// }
// button.addEventListener("click", increase);

button.addEventListener("mousedown", function (event) {
  if (event.button === 2) {
    event.preventDefault();
    alert("Right click");
  }
});
