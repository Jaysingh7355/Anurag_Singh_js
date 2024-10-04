const h1 = document.querySelector('h1')
const card = document.querySelector('.card') 
const container = document.querySelector('.container')
  
// h1.onclick = "sayhi";


function sayHi(){
    console.log('hi');
}

// h1.onclick = sayHi;

h1.addEventListener('click', (()=>{
    console.log('hi');
}))
h1.addEventListener('click', (()=>{
    console.log('second hi');
}))
let clicked =0;
card.addEventListener('click',()=>{
    clicked++;
    const newCard = document.createElement('div');
    newCard.classList.add('card')
    newCard.innerText = clicked;
    container.appendChild(newCard);    
})



