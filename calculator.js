const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);
const num1 = prompt("Please enter the first number:  ");
const num2 = prompt("Please enter the second number: ");
const oporat = prompt("Please choose the operation (+, -, /, *):  ");

if (oporat == "+") {
  console.log( Number(num1) + Number(num2));
} else if (oporat == "-") {
  console.log( Number(num1) - Number(num2));
} else if (oporat == "/") {
  console.log( Number(num1) /  Number(num2));
} else oporat == "*";
{
  console.log( Number(num1) *  Number(num2));
}
