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
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juce with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

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

