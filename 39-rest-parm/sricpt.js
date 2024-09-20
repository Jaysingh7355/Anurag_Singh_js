const nums1 = [1,2,3,4]

// function add(a,b,c,...nums){
//     console.log(a,b,c);
//     console.log("nums",nums);
// }

function add(...nums){
    
 return nums.reduce((acc,curr)=> acc+curr )
}

function add(...nums){
   
 return [...arguments].reduce((acc,curr)=> acc+curr )
}

function add(...nums){
   
    return Array.from(arguments).reduce((acc,curr)=> acc+curr )
   }





const result = add(8,9,9,7,7,7,78,77,6,6,67,8,8,78,7,6,7,8,)