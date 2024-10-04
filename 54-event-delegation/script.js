const h1 = document.querySelector("h1");
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const form = document.querySelector('form');


let clicked = 0;
card.addEventListener("click", () => {
  clicked++;
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = clicked;
  container.appendChild(newCard);
});


container.addEventListener('click',(e)=>{
e.target.remove();
})


