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

// const intervalId = setInterval(() => {
//   if (clicked > 998) {
//     clearInterval(intervalId);
//   }
//   card.click();
// }, 1);

// setInterval(()=>{
//     input.blur()
//     console.log('input is blur')
// },1000)

// setInterval(()=>{
//     form.submit()
//     console.log('from submit');
// },3000)

setInterval(()=>{
    form.reset()
    console.log('from reset');
},3000)

