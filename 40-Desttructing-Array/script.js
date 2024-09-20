  const colors = ['red,','green','yellow','pink', 'black','white'];
//    const color1 =colors[0];
//    const color2 =colors[1];
//    const color3 =colors[2];
//   const [color1,color2,o,b,i,e]=colors

//   const [,,,color3]=colors
 
 const {3:color3, 5:color5} = colors;


const user  = {
    name:'jay',
    age:23,
    addresss:{
        city:'Node',
        state:'Utar-pradesh'
    }
}

const name = user.name;
const age  = user.age;

// const {name:userName, age:userAge } = user

// const {addresss: {city}} = user

// const {addresss} = user;
// const {city} = addresss



function intro({age,name}){
    console.log(name,age)
}

// intro(user)

function printColor([a,b,,g]){
    console.log(a,b,g);
}