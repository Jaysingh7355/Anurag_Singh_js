const userName = document.querySelector('#username')
 const paragraph =  document.querySelector('.para')
 const form = document.querySelector('form')
// userName.addEventListener('click',()=>{
//     console.log("input clicked")
// })



// userName.addEventListener('input', (e) => {
//     paragraph.innerText = e  .target.value;
// })


// userName.addEventListener('change', (e) => {
//     paragraph.innerText = e.target.value;
// })



// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//    const myFromData = new FormData(form)

//    for(const p of myFromData.entries()){
//     console.log(p);
    
//    }

// })

form.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target);
    console.log(e.currentTarget);
})