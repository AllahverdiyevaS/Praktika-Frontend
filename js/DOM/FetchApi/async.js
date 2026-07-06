// async function hallo() {
//   console.log("salam dunya");
// }
// async function getPosts() {
//   const posts = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts")
//   ).json();
//   posts.forEach((post) => {
//     console.log(post.title);
//   });
//   console.log(posts);
// }
// getPosts();

// async function getUsers() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   users.forEach((user) => {
//     console.log(user.name);
//   });
//   console.log(users);
// }
// getUsers();

// async function getUsers() {
//   try {
//     const users = await (
//       await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     console.log(users);
//   } catch (error) {
//     throw new Error("Xeta bas verdi");
//   }
// }
// getUsers();

// async function getUser(id) {
//   const user = await (
//     await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//   ).json();
//   console.log(user);
// }
// getUser(4);

// async function getThirdPosts() {
//   const posts = await await (
//     await fetch("https://jsonplaceholder.typicode.com/posts")
//   ).json();
//   const third = posts.slice(0, 3);
//   console.log(third);
// }
// getThirdPosts();

// async function getCompletedTodos() {
//   const todos = await (
//     await fetch("https://jsonplaceholder.typicode.com/todos")
//   ).json();
//   const completedTodo = todos.forEach((todo) => {
//     if (todo.completed) {
//       console.log(todo);
//     }
//   });
// }
// getCompletedTodos();

// async function getLength() {
//   const todos = await (
//     await fetch("https://jsonplaceholder.typicode.com/todos")
//   ).json();
//   const length = todos.length;
//   console.log(length);
// }
// getLength();
async function getUsersEmail() {
  try {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    const usersEmail = users.forEach((user) => {
      console.log(user.email);
    });
  } catch (error) {
    throw new Error("Xeta bas verdi");
  }
}
getUsersEmail();

// async function getUsersPhone() {
//   try {
//     const users = await (
//       await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     const usersEmail = users.forEach((user) => {
//       console.log(user.phone);
//     });
//   } catch (error) {
//     throw new Error("Xeta bas verdi");
//   }
// }

// getUsersPhone();

// let isLoading = false;
// async function getUsersInfo(params) {
//   isLoading = true;
//   console.log("loading");
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   console.log(users);

//   console.log("loading tamamlandi");
// }
// getUsersInfo();

// async function getUsers() {
//   try {
//     const users = await (
//       await fetch("https://jsonplaceholer.typicode.com/users")
//     ).json();
//   } catch (error) {
//     throw new Error("Xeta bas verdi,url sehvdi ");
//   }
// }
// getUsers();

// async function getFirstUser() {
//   try {
//     const users = await (
//       await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     const firstUser = users[0];
//     console.log(firstUser);
//   } catch (error) {
//     throw new Error("Xeta bas verdi,url sehvdi ");
//   }
// }
// getFirstUser();

async function getLastPost() {
  try {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    const lastPost = users[users.length - 1];
    console.log(lastPost.title);
  } catch (error) {
    throw new Error("Xeta bas verdi,url sehvdi ");
  }
}
getLastPost();
