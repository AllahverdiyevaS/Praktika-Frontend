const formSubmit = document.querySelector("#form");
const inputText = document.querySelector(".input_text");
const todoList = document.querySelector(".todo_list");
const deleteIcon = document.createElement("i");
const searchTodo = document.querySelector("#search");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = inputText.value.trim();
  if (todoText === null || todoText === "") {
    alert("Please enter a todo item.");
  } else {
    adTodoToUi(todoText);
    adTodoToStorage(todoText);
  }
});
let todos = [];
document.addEventListener("DOMContentLoaded", pageLoad);
function pageLoad(params) {
  getTodosFromStorage();
  todos.forEach(function (todo) {
    adTodoToUi(todo);
  });
}

function adTodoToUi(newTodo) {
  const li = document.createElement("li");
  const text = document.createElement("span");
  li.classList.add("todo_item");
  const deleteButton = document.createElement("a");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-remove");
  deleteButton.appendChild(deleteIcon);
  deleteButton.classList.add("delete_button");
  text.textContent = newTodo;
  li.appendChild(text);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
  inputText.value = "";
}
let conatiner = document.querySelector(".container");
conatiner.addEventListener("click", removeTodoFromUi);
function removeTodoFromUi(e) {
  if (e.target.className === "fa fa-remove") {
    console.log("x basildi");

    let todo = e.target.parentElement.parentElement;
    todo.remove();
    removeTodoFromStorage(todo.textContent.trim());
  }
}
function removeTodoFromStorage(removedTodo) {
  getTodosFromStorage();
  let index = todos.indexOf(removedTodo);
  if (index !== -1) {
    todos.splice(index, 1);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}

function adTodoToStorage(newTodo) {
  getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

searchTodo.addEventListener("keyup", searchTodoFunction);
function searchTodoFunction(e) {
  const searchValue = e.target.value.toLowerCase();
  const todoItems = document.querySelectorAll(".todo_item");
  if (todoItems.length > 0) {
    todoItems.forEach(function (item) {
      const todoText = item.textContent.toLowerCase().trim();

      if (todoText.includes(searchValue)) {
        item.setAttribute("style", "display:flex");
      } else {
        item.setAttribute("style", "display:none");
      }
    });
  } else {
    console.log("todo yoxdu");
  }
}
