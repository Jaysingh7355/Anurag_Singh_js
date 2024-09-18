'use strict'
// const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// for(let i=0; i<= fruits.length; i++){
//     console.log(fruits[i]);
// }
// console.log('*******************************')

// for(const fruit of fruits){
   
//     console.log(fruit)
// }


const person = {
    fristName :'jay',
    lastName :"singh",
    age:23,

}

// for(const key in person){
//     console.log(key,person[key])
// }

const personKey = Object.keys(person)
const personValue = Object.values(person)
const personEntices = Object.entries(person)
for(const key of personKey){
    console.log(person[key]);
}
