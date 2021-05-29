//Selecting and Manipulating Elements//

// 'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 correct number! "
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value)


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
    //location.reload(); first try
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").textContent = "?"
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".number").style.width = "15rem"
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "  ";
    document.querySelector(".")
})

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number((document.querySelector(".guess").value));
    console.log(guess);



    //No number
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No Number"
    }

    //correct number
    else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 correct number!"
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber;
        if (score > highscore) {                                           //Highscore
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }


    else if (guess > secretNumber) {

        if (score > 1) {

            // Number is too high

            document.querySelector(".message").textContent = "📈 Too High!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "💥 You lost the game"
            document.querySelector(".score").textContent = 0;
        }
    }
    else if (guess < secretNumber) {

        if (score > 1) {

            // Number is too low
            document.querySelector(".message").textContent = "📉 Too Low!"
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "💥 You lost the game"
            document.querySelector(".score").textContent = 0;
        }
    }

})

