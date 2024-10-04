const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
// const firstImage = document.querySelector('img') 


//  for(let i= 0; i<100; i++){
//    const newImage = firstImage.cloneNode()
//    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//    container.append(newImage)
//  }

const para = document.createElement('p');
// document.body.appendChild(para);
// para.innerText = "Jay singh";
// para.classList.add('name');
// para.id ="names"


// for(let i=1; i<=100; i++){
//     const newDiv = document.createElement('div')
//     newDiv.style.textAlign = 'center';
//     const firstImage = document.createElement('img')
//     const imgNo =  document.createElement('h3')
//     firstImage.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     imgNo.innerText= `${i}`;
//     container.appendChild(newDiv)
//     newDiv.appendChild(firstImage);
//     newDiv.appendChild(imgNo);

// }


let myHTML =` `

for(let i=1; i<=100; i++){
    myHTML +=`
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
    <p>${i}</p>
    </div>
    
    `

    container.innerHTML = myHTML;
}
