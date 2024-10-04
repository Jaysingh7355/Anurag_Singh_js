const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue =  document.querySelector('.blue')



window.addEventListener('click', (e)=>{
    
    console.log('5.event from body');
},{capture:true})
document.body.addEventListener('click', (e)=>{
    console.log('4.event from document');
})

green.addEventListener('click',(e)=>{
   
    console.log('3.event from green');
},true)


pink.addEventListener('click',(e)=>{
    console.log('2.event from pink');
},true)

blue.addEventListener('click',(e)=>{
   
   console.log('1.event from blue');
},{capture:true})

// blue.addEventListener('click',(e)=>{
   
//     console.log('1.event from blue');
//  },{capture:true, once:true})