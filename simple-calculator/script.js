
// let firstValue = prompt('Value 1?');
// let operator = prompt('Value Operator?');
// let secondValue = prompt('Value 2?');

// firstValue = parseInt(firstValue);
// secondValue = parseInt(secondValue);

//     operator === "+"
//    ? console.log(firstValue + secondValue)
//    : console.log(firstValue - secondValue);

// switch (operator) {
//     case '+' : console.log(firstValue + secondValue);
//     break;
//     case '-' : console.log(firstValue - secondValue);
//     break;
//     case '/' : console.log(firstValue / secondValue);
//     break;
//     case '*' : console.log(firstValue * secondValue);
//     break;
//     default:  console.log("Invalid Operator");
// };

let playerName = prompt('What is your name?');
const random = Math.floor(Math.random() * 100) + 1;
let number = prompt('Give a number bewteen 1 and 100');

while(number !== random) {
if (number > random) {
    console.log("It is less");
    number = prompt('Give a number bewteen 1 and 100');
} if (number < random) {
    console.log("It is more");
    number = prompt('Give a number bewteen 1 and 100');
} else {
    console.log(`${playerName} WINS!`);
    break;
}
}

