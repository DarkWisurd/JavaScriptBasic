// Coding Challenge 1
"use strict";
// test data 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const teamDolphin = calcAverage(44, 23, 71);
const teamKolas = calcAverage(65, 54, 49);

function cheakWinner(aveDolphin, aveKolas) {
    if (aveDolphin >= 2 * aveKolas) {
        console.log("Dolphins win ");
    }
    else if (aveKolas >= 2 * aveDolphin) {
        console.log("kolas win");
    }
    else {
        console.log("nobody wins")
    }
}
cheakWinner(teamDolphin, teamKolas);

//test data 2
const calcAverage1 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const teamDolphin1 = calcAverage(526, 54, 41);
const teamKolas1 = calcAverage(23, 34, 27);

function cheakWinner1(aveDolphin, aveKolas) {
    if (aveDolphin > aveKolas && aveKolas * aveKolas < aveDolphin) {
        console.log("Dolphins win ");
    }
    else if (aveKolas > aveDolphin && aveDolphin * aveDolphin < aveKolas) {
        console.log("kolas win");
    }
    else {
        console.log("nobody wins")
    }
}
cheakWinner(teamDolphin1, teamKolas1);