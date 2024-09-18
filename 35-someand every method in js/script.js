const evenNumber = [0,2,5,6,8]

// const result = evenNumber.some((num)=>{
//   // console.log(num);
 
//   return num >4;
// })

const result = evenNumber.every((num)=>{
  // console.log(num);
 
  return num%2 === 0;
})