const imageElement = document.querySelector("img");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
     
      imageElement.src = json.message;
    });
});
