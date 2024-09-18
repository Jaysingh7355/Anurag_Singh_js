const a= 4;
const b= 6;

function outer(){
    debugger
    const a= 4;
    const b = 6;
   return function () {
    console.log(a+b);
   }
    
}

console.dir(add)