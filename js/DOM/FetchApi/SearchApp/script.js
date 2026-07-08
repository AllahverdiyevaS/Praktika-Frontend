const formContainer = document.querySelector(".form_container");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search_input");
const buttonsContainer = document.querySelector(".buttons_container");
const searchButton = document.querySelector(".serach_button");
const imageList = document.querySelector(".image_list");
const clearButton = document.querySelector(".clear_button");
const host = "https://api.unsplash.com";
const path = "/search/photos";

function serach(e) {
  const query = searchInput.value.trim();
  fetch(`${host}${path}?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID 6L5uPkl41q2JSWWylBw50VdN1OF7ptmf_eaok6XHXXA",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      Array.from(data.results).forEach((result) => {
        console.log(result.urls.regular);
        addImages(result.urls.regular);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  e.preventDefault();
}
form.addEventListener("submit", serach);
function addImages(imgUrl) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", imgUrl);
  img.height = "250";
  img.width = "250";
  card.append(img);
  imageList.append(card);
}
