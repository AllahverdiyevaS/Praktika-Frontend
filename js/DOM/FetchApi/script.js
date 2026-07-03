// const url = "https://jsonplaceholder.typicode.com/posts";
// // function getPosts(url) {
// //   const promise = fetch(url);
// //   promise
// //     .then((response) => response.json())
// //     .then((data) => console.log(data))
// //     .catch((error) => console.log(error));
// // }
// // getPosts(url);

// function getPostId(url, id) {
//   fetch(url + `/${id}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }
// getPostId(url, 1);

// function getUsersName() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((user) => {
//         console.log(user.name);
//         console.log(user.email);
//       });
//       console.log(data.length);
//     })
//     .catch((error) => console.log(error));
// }
// getUsersName();
// // function getPosts(url) {
// //   const promise = fetch(url);
// //   promise
// //     .then((response) => response.json())
// //     .then((data) => console.log(data.slice(0, 5)))
// //     .catch((error) => console.log(error));
// // }
// // getPosts(url);
// // const commmentsUrl = "https://jsonplaceholder.typicode.com/comments";
// // function getComments(url) {
// //   fetch(url)
// //     .then((response) => response.json())
// //     .then((data) => {
// //       data.forEach((comment) => console.log(comment.name));
// //     })
// //     .catch((error) => console.log(error));
// // }
// // getComments(commmentsUrl);

// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((album) => console.log(album.title));
//   })
//   .catch((error) => console.log(error));

// // function getCompletedTodos() {
// //   fetch("https://jsonplaceholder.typicode.com/todos")
// //     .then((response) => response.json())
// //     .then((todos) => {
// //       todos.forEach((todo) => {
// //         if (todo.completed === true) {
// //           console.log(todo);
// //         }
// //       });
// //     })
// //     .catch((error) => console.log(error));
// // }
// function getCompletedTodos() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((todos) => {
//       todos.forEach((todo) => {
//         if (todo.completed === false) {
//           console.log(todo);
//         }
//       });
//     })
//     .catch((error) => console.log(error));
// }
// getCompletedTodos();

// // function getPosts(url) {
// //   const promise = fetch(url);
// //   promise
// //     .then((response) => {
// //       if (!response.ok) {
// //         console.log("Xeta bas verdi");
// //       }
// //       return response.json;
// //     })
// //     .then((data) => console.log(data))
// //     .catch((error) => console.log(error.message));
// // }
// // getPosts(url);

// let isLoading = true;
// let loading = document.createElement("p");

// document.body.appendChild(loading);
// if (isLoading) {
//   loading.textContent = "loading...";
// }
// function getPosts(url) {
//   const promise = fetch(url);
//   promise
//     .then((response) => {
//       if (!response.ok) {
//         console.log("Xeta bas verdi");
//       }
//       return response.json;
//     })
//     .then((data) => {
//       isLoading = false;
//       loading.textContent = "";
//       console.log(data);
//     })
//     .catch((error) => console.log(error.message));
// }
// getPosts(url);

const ul = document.createElement("ul");
document.body.appendChild(ul);
function getUsersName() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const li = document.createElement("li");
        li.innerHTML = user.name;
        ul.appendChild(li);
      });
    })
    .catch((error) => console.log(error));
}
getUsersName();

// const url = "https://jsonplaceholder.typicode.com/posts";
// function getPosts(url) {
//   const promise = fetch(url);
//   promise
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement("div");
//         div.innerText = todo.title;
//         document.body.appendChild(div);
//       });
//     })
//     .catch((error) => console.log(error));
// }
// getPosts(url);

// const url = "https://jsonplaceholder.typicode.com/photos";
// function getPhotos(url) {
//   const promise = fetch(url);
//   promise
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((photo) => {
//         const div = document.createElement("div");
//         const img = document.createElement("img");
//         div.appendChild(img);
//         img.src = photo.thumbnailUrl;
//         img.alt = photo.title;
//         document.body.appendChild(div);
//       });
//     })
//     .catch((error) => console.log(error));
// }
// getPhotos(url);
function getUsersName() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        console.log(user.name, user.email);
      });
    })
    .catch((error) => console.log(error));
}

let button = document.createElement("button");
button.innerText = "Click";
document.body.appendChild(button);
button.addEventListener("click", () => {
  getUsersName();
});
