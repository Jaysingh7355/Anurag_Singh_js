const nameElement = document.querySelector('.name-tag')
const inputName = document.querySelector('.name')
const ageElement = document.querySelector('.age-tag')
const inputAge = document.querySelector('.age')

// nameElement.innerText = localStorage.userName

// nameElement.innerText = localStorage.getItem('userName')
// inputName.addEventListener('input' ,(e) => {
//     //  localStorage.userName  = e.target.value;
//     localStorage.setItem('userName',e.target.value)
//      nameElement.innerText = localStorage.getItem('userName')
// })

// ageElement.innerText = localStorage.getItem('userAge')
// inputAge.addEventListener('input' ,(e) => {
//     //  localStorage.userName  = e.target.value;
//     localStorage.setItem('userAge',e.target.value)
//      ageElement.innerText = localStorage.getItem('userAge')
// })

const myData = JSON.parse(localStorage.getItem("myData")) || {}
if(myData.name){
nameElement.innerText = myData.name;
}
inputName.addEventListener("input",(e)=>{
    myData.name = e.target.value
    localStorage.setItem("myData",JSON.stringify(myData))
    nameElement.innerText = e.target.value
})

if(myData.age){
ageElement.innerText = myData.age;
}
inputAge.addEventListener("input",(e)=>{
    myData.age = e.target.value
    localStorage.setItem("myData",JSON.stringify(myData))
    ageElement.innerText = e.target.value
})







