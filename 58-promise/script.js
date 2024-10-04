const resolveBtn = document.querySelector('#resole-btn')
const rejectBtn =document.querySelector('#reject-btn')

const p = new Promise((resolve, reject)=>{
   resolve('resolve promise')
})


p.then(()=>{
    console.log('hiii');
    return 155;
 }).then((data)=>{
    console.log(data);
 }).then()
 
 
 
 
 .catch(()=>{
    console.log('rejected');   
 })