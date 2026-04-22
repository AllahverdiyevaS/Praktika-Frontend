let button = document.getElementById("button");
let buttonText = (button.innerHTML = "Click");
console.log(button);
console.log(buttonText);
let paragraph = document.querySelector("p");
paragraph.style.color = "green";
const list = document.querySelectorAll("li");
list.forEach(function (item) {
  item.style.color = "blue";
  item.innerHTML = "list";
});
console.log(list);
const containerForButton = document.querySelector(".container_for_button");

button.addEventListener("click", function () {
  containerForButton.style.backgroundColor = "yellow";
});
const heading = document.querySelector("h1");
heading.style.fontSize = "1rem";
containerForButton.style.backgroundColor = "aqua";

const buttonForInput = document.querySelector(".button_for_input");
const input = document.querySelector("input");

const paragraphForInput = document.querySelector(".paragraph_for_input");
buttonForInput.addEventListener("click", function () {
  let inputText = input.value;
  paragraphForInput.innerHTML = inputText;
  input.value = "";
});
let counterButton = document.querySelector("#counter");
let display = document.querySelector(".display");
// let containerForCount = document.querySelector(".count");
// let count = 0;
// counterButton.addEventListener("click", function () {
//   count++;
//   containerForCount.textContent = count;
// });
counterButton.addEventListener("click", function () {
  display.style.display = "none";
});
