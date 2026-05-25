// const saveName = document.createElement("button");
// saveName.innerText = "Save Name";
// const nameInput = document.createElement("input");
// const textName = document.createElement("p");
// document.body.appendChild(nameInput);
// document.body.appendChild(saveName);
// document.body.appendChild(textName);
// saveName.addEventListener("click", function () {
//   localStorage.setItem("name", nameInput.value);
//   textName.innerText = localStorage.getItem("name");
//   nameInput.value = "";
// });
// const loginButton = document.createElement("button");
// loginButton.innerText = "Login";
// const userInput = document.createElement("input");
// const textUser = document.createElement("p");
// document.body.appendChild(userInput);
// document.body.appendChild(loginButton);
// document.body.appendChild(textUser);
// loginButton.addEventListener("click", function () {
//   sessionStorage.setItem("user", userInput.value);
//   textUser.innerText = sessionStorage.getItem("user");
//   userInput.value = "";
// });
// const themeButton = document.createElement("button");
// themeButton.innerHTML = "change theme";
// document.body.appendChild(themeButton);
// themeButton.addEventListener("click", function () {
//   document.body.classList.toggle("dark");
//   if (document.body.classList.contains("dark")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// });
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "dark") {
//   document.body.classList.add("dark");
// }
// const buttonCounter = document.createElement("button");
// document.body.appendChild(buttonCounter);
// buttonCounter.innerHTML = "Counter";
// const number = document.createElement("p");
// document.body.appendChild(number);
// let count = localStorage.getItem("count");
// number.innerHTML = count;
// buttonCounter.addEventListener("click", function () {
//   count++;
//   event.preventDefault();
//   localStorage.setItem("count", count);
// });

// let refreshCount = sessionStorage.getItem("pageRefreshes");

// if (refreshCount === null) {
//   refreshCount = 0;
// } else {
//   refreshCount = parseInt(refreshCount) + 1;
// }

// sessionStorage.setItem("pageRefreshes", refreshCount);

// console.log("sehife yenilenme sayi: " + refreshCount);

// const input = document.createElement("input");
// input.value = localStorage.getItem("inputValue");
// input.addEventListener("input", function name(params) {
//   localStorage.setItem("inputValue", input.value);
// });
// document.body.appendChild(input);

// const button = document.createElement("button");
// button.innerHTML = "clear";
// document.body.appendChild(button);
// button.addEventListener("click", function () {
//   sessionStorage.clear();
// });
// const select = document.createElement("select");
// const option1 = document.createElement("option");
// const option2 = document.createElement("option");
// select.appendChild(option1);
// select.appendChild(option2);
// document.body.appendChild(select);
// option1.value = "blue";
// option2.value = "green";
// option1.innerHTML = "blue";
// option2.innerHTML = "green";
// select.addEventListener("change", function () {
//   document.body.style.backgroundColor = select.value;
//   localStorage.setItem("backgroundColor", select.value);
// });

// const button = document.createElement("button");
// button.innerText = "clear";
// document.body.appendChild(button);
// button.addEventListener("click", function () {
//   localStorage.clear();
// });

// const localDate = new Date().toLocaleString();
// localStorage.setItem("loginTime", localDate);
// const text = document.createElement("p");
// text.innerText = "login Time:" + localStorage.getItem("loginTime");
// document.body.appendChild(text);

// const melumat = { name: "Ali", age: 25 };
// localStorage.setItem("melumat", JSON.stringify(melumat));
// sessionStorage.setItem("melumat", JSON.stringify(melumat));
// const localData = JSON.parse(localStorage.getItem("melumat"));
// const sessionStorageData = JSON.parse(sessionStorage.getItem("melumat"));

// const inputCharacter = document.createElement("input");
// const textCharachter = document.createElement("p");
// document.body.appendChild(inputCharacter);
// document.body.appendChild(textCharachter);
// textCharachter.innerHTML = localStorage.getItem("character");
// inputCharacter.addEventListener("input", function () {
//   localStorage.setItem("character", inputCharacter.value.length);
//   textCharachter.innerHTML = localStorage.getItem("character");
// });
// const buttonHide = document.createElement("button");
// const card = document.createElement("div");
// document.body.appendChild(card);
// document.body.appendChild(buttonHide);
// card.style.width = "200px";
// card.style.height = "200px";
// card.style.backgroundColor = "red";
// buttonHide.innerText = "hide";
// buttonHide.addEventListener("click", function (params) {
//   card.style.display = "none";
//   localStorage.setItem("cardHidden", "true");
// });
// if (localStorage.getItem("cardHidden") === "true") {
//   card.style.display = "none";
// }

const inputName = document.createElement("input");
const inputAge = document.createElement("input");
inputName.placeholder = "Name";
inputAge.placeholder = "Age";
const form = document.createElement("form");
form.appendChild(inputName);
form.appendChild(inputAge);
document.body.appendChild(form);
const button = document.createElement("button");
button.innerHTML = "submit";
form.appendChild(button);
button.addEventListener("click", function () {
  event.preventDefault();
  const user = {
    name: inputName.value,
    age: inputAge.value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  const container = document.createElement("div");
  const data = JSON.parse(localStorage.getItem("user"));
  container.innerHTML = `Name: ${data.name} <br> Age: ${data.age}`;
  document.body.appendChild(container);
});
