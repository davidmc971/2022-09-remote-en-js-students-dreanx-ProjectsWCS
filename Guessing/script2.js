const random = Math.floor(Math.random() * 100) + 1;
console.log(random);

let count = 1;

let restartbutton = document.getElementById("restartbutton");
restartbutton.addEventListener("click", function(){location.reload()});

let numberbutton = document.getElementById("numberbutton");
let forme = document.getElementById("forme");
let catimg = document.getElementById("catimg");

numberbutton.addEventListener("click", function game(event) {
    event.preventDefault();
    let inputname = document.getElementById("inputname").value;
    let number = document.getElementById("inputnumber").value;
if (number > random) {
            console.log("It is less");
            count++;
            forme.innerHTML = `TRY n°${count}... IT IS LESS, TRY AGAIN:`;
            document.getElementById("inputnumber").value = "";
} 
else if (number < random) {
            console.log("It is more");
            count++;
            forme.innerHTML = `TRY n°${count}... IT IS MORE, TRY AGAIN:`;
            document.getElementById("inputnumber").value = "";
} 
else {
        if(count === 1){console.log(`${inputname} WINS! In ${count} try!`)} else {console.log(`${inputname} WINS! In ${count} tries!`)};
        if(count === 1){forme.innerHTML = `Congrats ${inputname}! The Number was ${random}! You got it in ${count} try! What a pro!`}
        else if(count > 1 && count < 10){forme.innerHTML = `Congrats ${inputname}! The Number was ${random}! You got it in ${count} tries! Pretty Good!`}
        else {forme.innerHTML = `Congrats ${inputname}! The Number was ${random}! You got it in ${count} tries! You're not really good at this, are you?!`};
        img.style.display = "block";
    }
});


