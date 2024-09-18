let username = prompt("Enter your name") || "procoder";

let userAge = parseInt(prompt("enter your age")) || 22;
// debugger
113
// if(username ==null || userAge == NaN){
//     username='jay singh procoder';
//     userAge=23
// }
console.log(`Name: ${username}`);
console.log(`userAge: ${userAge}`);

if (userAge >= 0 && userAge <= 4) {
  console.log(`${username} is kib`);
  console.log(`and${username} is `);
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`${username} is school going student `);
  console.log(`and${username} is learning  science and math`);
  if(userAge<=15){
    console.log("not qualified to go gym")
  }else{
    console.log('planing to go to the gym')
  } 
} 
else if (userAge >= 18 && userAge <= 25) {
  console.log(`${username} is collage going student `);
  console.log(`and${username} is learning computer science`);
} else if (userAge >= 25 && userAge <= 45) {
  console.log(`${username} is working professional `);
  console.log(`and ${username} is an expert in computer science`);
} else if (userAge > 45 && userAge <= 121) {
  console.log(` ${username} is retired. `);
  console.log(`${username}this is the time to chill `);
} else {
  console.log("Enter a valid age");
}
console.log("program ended");
