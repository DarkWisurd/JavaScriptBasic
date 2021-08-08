//Selecting and Manipulating Elements//

// 'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 correct number! "
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value)


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function dislpayMsg(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".again").addEventListener("click", function () {
    //location.reload(); first try
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    dislpayMsg("Start guessing...");
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".score").textContent = score = 20;
    document.querySelector(".guess").value = "  ";
})

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number((document.querySelector(".guess").value));
    console.log(guess);



    //No number
    if (!guess) {
        dislpayMsg("⛔ No Number")
    }

    //correct number
    else if (guess === secretNumber) {
        dislpayMsg("🎉 correct number!")
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    }

    //when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {

            // Number is too high

            document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            dislpayMsg("💥 You lost the game")
            document.querySelector(".score").textContent = 0;
        }
    }

    // else if (guess > secretNumber) {

    //     if (score > 1) {

    //         // Number is too high

    //         document.querySelector(".message").textContent = "📈 Too High!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "💥 You lost the game"
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
    // else if (guess < secretNumber) {

    //     if (score > 1) {

    //         // Number is too low
    //         document.querySelector(".message").textContent = "📉 Too Low!"
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }
    //     else {
    //         document.querySelector(".message").textContent = "💥 You lost the game"
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }

})


