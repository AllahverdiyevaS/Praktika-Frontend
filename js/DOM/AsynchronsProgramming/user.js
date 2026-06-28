// function readUsers(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     try {
//       xhr.addEventListener("readystatechange", function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           const users = JSON.parse(xhr.responseText);
//           resolve(users);
//         }
//       });
//       xhr.open("GET", url, true);
//       xhr.send();
//     } catch (error) {
//       reject(error);
//     }
//   });
// }
// readUsers("users.json")
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => console.error);

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Məlumat uğurla alındı. ");
//   }, 2000);
// });
// promise1.then((response) => {
//   console.log(response);
// });

// const age = 17;
// const promise2 = new Promise((resolve, reject) => {
//   if (age > 18) {
//     resolve("Yasiniz 18 boyukdu");
//   } else {
//     reject("Yasiniz 18 kicikdi");
//   }
// });
// promise2
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Mehsul ugurla elave edildi ");
//   }, 3000);
// });
// promise3.then((response) => {
//   console.log(response);
// });
// isEnoughMoney = true;
// const promise4 = new Promise((resolve, reject) => {
//   if (isEnoughMoney) {
//     resolve("Odenis tesdiqlendi");
//   } else {
//     reject("Xata yarandi, balansda kifayet qeder pul yoxdur");
//   }
// });
// promise4
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

const usersUrl = "https://jsonplaceholder.typicode.com/users";
function getUsers(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        resolve(users);
      }
    });
    xhr.open("GET", url, true);
    xhr.send();
  });
}

getUsers(usersUrl).then((users) => {
  console.log(users);
});
const isLoaded = true;
const promise5 = new Promise((resolve, reject) => {
  if (isLoaded) {
    resolve("Fayl yuklendi");
  } else {
    reject("Xeta bas verdi");
  }
});
promise5
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

isShow = true;
const promise7 = new Promise((resolve, reject) => {
  if (isShow) {
    resolve("Netice");
  } else {
    rejecet("Xeta");
  }
});

promise7
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

function userLogin(password) {
  return new Promise((resolve, reject) => {
    if (password === "12345") {
      resolve("Xos gelmisiz");
    } else {
      reject("Giris ugursuz oldu");
    }
  });
}
userLogin("1234567")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

function getOrder(product) {
  return new Promise((resolve, reject) => {
    resolve(`${product} Mehsulu sifaris olundu`);
  });
}
getOrder("Sacqurutma ").then((response) => console.log(response));

function registration(name) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(`${name} geydiyatdan kecdi`);
      }, 500);
    } catch (error) {
      reject(error);
    }
  });
}
registration("Shafayat")
  .then((message) => console.log(message))
  .catch((errorMessage) => console.log(errorMessage));

function loadImg() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sekil yuklendi");
    }, 500);
  });
}
loadImg().then((response) => console.log(response));

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Email gonderildi");
      reject("Xeta bas verdi");
    }, 500);
  });
}
sendEmail()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
