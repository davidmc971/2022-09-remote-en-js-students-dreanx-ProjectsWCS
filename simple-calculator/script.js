
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
// }}

// calc();




//WITH A WHILE LOOP\\
let playerName = prompt('What is your name?');
const random = Math.floor(Math.random() * 100) + 1;
let count = 0;
let divy = document.getElementById("result");

function game() {let number = prompt('Give a number bewteen 1 and 100');

    while (number !== random) {

if (number > random) {

            console.log("It is less");
            count++;
            divy.innerHTML = "LESS";
            number = prompt(`Wrong! Try again, it is LESS than ${number}!`);
} 
else if (number < random) {

            console.log("It is more");
            count++;
            divy.innerHTML = "MORE";
            number = prompt(`Wrong! Try again, it is MORE than ${number}!`);
} 
else if (number == random) {
        console.log(`${playerName} WINS! In ${count} tries!`);
        divy.innerHTML = `Congrats ${playerName}! The Number was ${random}! You got it in ${count} tries!`;
        break;
    }
}};


let play = prompt(`${playerName}, do you want to play a game? Y/N`)
if(play === "Y") {
    game();
} else {console.log("Too Bad!")}





//WITH A FOR LOOP\\
// let playerName = prompt('What is your name?');
// const random = Math.floor(Math.random() * 100) + 1;

// function game() {
//     for(let number = prompt('Give a number bewteen 1 and 100'); number !== random ; number = prompt('Give a number bewteen 1 and 100')) {

//         if (number > random) {
//             console.log("It is less");
//     } 
//         else if (number < random) {
//             console.log("It is more");
//     } 
//         else if (number == random) {
//             console.log(`${playerName} WINS!`);
//             break;
//     }
//     }};

// game();