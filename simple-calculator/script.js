
// let firstValue = prompt('Value 1?');
// let operator = prompt('Value Operator?');
// let secondValue = prompt('Value 2?');

// firstValue = parseInt(firstValue);
// secondValue = parseInt(secondValue);

// //     operator === "+"
// //    ? console.log(firstValue + secondValue)
// //    : console.log(firstValue - secondValue);

// function calc() { switch (operator) {
//     case '+' : console.log(firstValue + secondValue);
//     break;
//     case '-' : console.log(firstValue - secondValue);
//     break;
//     case '/' : console.log(firstValue / secondValue);
//     break;
//     case '*' : console.log(firstValue * secondValue);
//     break;
//     default:  console.log("Invalid Operator");
// };}

// calc();

let playerName = prompt('What is your name?');
const random = Math.floor(Math.random() * 100) + 1;
let number = prompt('Give a number bewteen 1 and 100');


function game() {while (number !== random) {

if (number > random) {

            console.log("It is less");
            number = prompt(`Wrong! Try again, it is LESS than ${number}!`);
} 
if (number < random) {

            console.log("It is more");
            number = prompt(`Wrong! Try again, it is MORE than ${number}!`);
} 
if (number == random) {
        console.log(`${playerName} WINS!`);
        break;
    }
}};

game();