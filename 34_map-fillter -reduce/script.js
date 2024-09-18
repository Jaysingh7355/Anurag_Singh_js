const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const students = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Alice", age: 21 },
  { name: "Tom", age: 23 },
  { name: "Emma", age: 18 }
];




// const satya = months.forEach((month, index) => {s
//   console.log(index + 1, month);
//   return month.toUpperCase();
// });


const satya = months.map((month, index) => {
  // console.log(index + 1, month);
  return month.toUpperCase();
});

 const filtered = months.filter((month) => {
  // console.log( month);
// console.log(month.toLocaleLowerCase().includes('m'))
  return ;
})


const stu = students.filter((User)=>{
  return User.age>20;
}).map((user)=>{
  return(user.name);
}).filter((users)=>{
return( users.includes("A"));
})

// console.log(stu)
