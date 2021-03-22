//strict mode 
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");


//functions

// function is a peice of code which we can use over and over again 


//declaring the function
function logger() {
    console.log("My name is Vedant")  // called function body.
}

// calling the function
logger();
logger();
logger();
logger();

// example of DRY(dont repeate yourself ) code
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juce with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Function Declarations vs. Expressions


// declaration function
function calcAge1(birthYear) {// can call function before declaring it
    return 2037 - birthYear;
}

const age1 = calcAge1(2007);
console.log(age1)


// expression functions 

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(2007);

console.log(age2);



// Arrow functions 


// function declaration
function calcAge3(birthYear) {// can call function before declaring it
    return 2037 - birthYear;
}

//arrow function


const calcAge4 = birthYear => 2037 - birthYear;


const age4 = calcAge4(2007);
console.log(age4);



// const yearsUntilRetirment = (birthYear, firstName) => {
//     const weAreUsingAgeAgain = 2037 - birthYear;
//     const retirment = 65 - weAreUsingAgeAgain;
//     return `${firstName} Retiers in ${retirment} years`;
// }
console.log(yearsUntilRetirment(2007, "vedant"));


// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePeciecs = cutFruitPieces(apples);
    const orangePeciecs = cutFruitPieces(oranges);

    const juice = `juce with ${applePeciecs} pieces of apples and ${orangePeciecs}   pecies oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));




//Reveving Functions 

function calculatingAge(birthYear) {//having 2 pareameters with same name in 2 functions is valid 
    return 2037 - birthYear;
}

function yearsUntilRetirment(birthYear, firstName) {
    const weAreUsingAgeAgain = calculatingAge(birthYear);
    const retirment = 65 - weAreUsingAgeAgain;

    if (retirment > 0) {

        return retirment;
    }
    else {
        return -1;
    }
    //return `${firstName} Retiers in ${retirment} years`;
}

console.log(yearsUntilRetirment(1970, "present mike"));



// Coding Challenge 1

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
    if (aveDolphin >= aveKolas * aveKolas * aveKolas) {
        console.log("Dolphins win ");
    }
    else if (aveKolas >= aveDolphin * aveDolphin * aveDolphin) {
        console.log("kolas win");
    }
    else {
        console.log("nobody wins")
    }
}
cheakWinner(teamDolphin1, teamKolas1);



//Introduction to Arrays

// without using array

const friend1 = "michale";
const friend2 = "steven";
const friend3 = "peater";


// with using arrays


const friends = ["michale", "steven", "peater"];
console.log(friends);
console.log(friends[0]);

// diffrent ways to use arrays

const yeares = new Array(2007, 2008, 2020, 2021);

console.log(yeares);


console.log(friends.length);
console.log(friends[friends.length - 1]);


friends[2] = "jay";
console.log(friends)

const vedant = ["vedant", "deshpande", 2037 - 2007, "student", friends];

console.log(vedant);
//Exercise
function calculatingAge1(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2020]

const seeWeAreUseingAge = calculatingAge1(years[0]);
const seeWeAreUseingAgeYetAgain = calculatingAge1(years[1]);
const seeWeAreUseingAgeHaha = calculatingAge1(years[years.length - 1]);

console.log(seeWeAreUseingAge, seeWeAreUseingAgeYetAgain, seeWeAreUseingAgeHaha)


const ages = [calculatingAge1(years[0]), calculatingAge1(years[1]), calculatingAge1(years[years.length - 1])];


console.log(ages)


/////////////////////////////////////////////



//Basic Array Operations (Methods)



