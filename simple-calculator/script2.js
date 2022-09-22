// const random = Math.floor(Math.random() * 100) + 1;
// console.log(random);
// let count = 1;
// let divy = document.getElementById("result");
// let catImg = document.getElementById("img");


// function game() {
//     let playerName = prompt('What is your name?');
//     let number = prompt('Give a number between 1 and 100');
//     while (number !== random) {

// if (number > random) {
//             console.log("It is less");
//             count++;
//             divy.innerHTML = "LESS";
//             number = prompt(`Wrong! Try again, it is LESS than ${number}! (Try n°${count})`);
// } 
// else if (number < random) {

//             console.log("It is more");
//             count++;
//             divy.innerHTML = "MORE";
//             number = prompt(`Wrong! Try again, it is MORE than ${number}! (Try n°${count})`);
// } 
// else {
//         if(count === 1){console.log(`${playerName} WINS! In ${count} try!`)} else {console.log(`${playerName} WINS! In ${count} tries!`)};
//         if(count === 1){divy.innerHTML = `Congrats ${playerName}! The Number was ${random}! You got it in ${count} try! What a pro!`}
//         else if(count > 1 && count < 10){divy.innerHTML = `Congrats ${playerName}! The Number was ${random}! You got it in ${count} tries! Pretty Good!`}
//         else {divy.innerHTML = `Congrats ${playerName}! The Number was ${random}! You got it in ${count} tries! You're not really good at this, are you?!`};
//         catImg.style.display = "block";
//         break;
//     }
// }};


// setTimeout(() => {
//     let play = prompt(`Do you want to play a game? Y/N`);
//   ;
// if(play === "Y" || play === "y" || play === "yes" || play === "yis") {
//     game();
// } else {console.log("Too Bad!")}}, 3000);