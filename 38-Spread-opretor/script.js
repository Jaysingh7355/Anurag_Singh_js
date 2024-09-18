const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8, 9, 10];

const jay = "Singh";

const joinedArray = [...num1, ...num2];

const user1 = {
  userName: "jay",
  userAge: "Singh",
};

const combinedObj = { ...user1, city: "Noida" };

function add(arguments) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
