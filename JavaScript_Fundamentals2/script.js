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


// add elements
const friends2 = ["vedant", "soham", "atharva"];
friends2.push("jay")// .push is an function so it can return something 
const sup = friends2.push("arjun")

console.log(sup)// it returns length of an array
console.log(friends2)

friends2.unshift("running out of names");
console.log(friends2);

// remove elements

friends2.pop();// will remove last element of array


friends2.pop();// will return the last element of an array
console.log(friends2)

friends2.shift();//removes the frirst element of an array 
// will also return the element that was removed 
console.log(friends2);

console.log(friend2.indexOf("soham"));

console.log(friend2.includes("vedant"))


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/

const bill = 275;
// const tip = bill >= 50 ? bill / 100 * 15 : bill / 100 * 15;
// console.log(`bill=${bill} tip = ${tip} total amount = ${bill + tip}`)

function calcTip(bill) {
    const tip = bill >= 50 ? bill / 100 * 20 : bill / 100 * 15;
    return tip;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
// bonus

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);
console.log(tips)






//Introduction to Objects

const vedant1 = {
    firstName: "vedant",
    lastName: "deshpande",
    age: 2037 - 2007,
    job: "student",
    friends: ["vedant", "soham", "atharva"]
}
//Dot vs. Bracket Notation
console.log(vedant1);

//dot notation
console.log(vedant1.lastName)

//Braket notation
console.log(vedant1["lastName"])


//anuja
const person = {
    anuja: {
        firstName: "anuja",
        lastName: "chaytanya",
        phNumber: 4567465765
    },
    vedant: {
        firstName: "vedant",
        lastName: "deshpande",
        phNumber: 9146178510
    }
}

console.log(person.anuja)



// back to course

const nameKey = "Name"

console.log(vedant1["first" + nameKey]);// we can put any exprection in bracket notation
console.log(vedant1["last" + nameKey]);

// console.log(vedant1."last" + nameKey); // will not work




const inputInfo = prompt("what do you want to know about vedant choose between firstName Lastname age job friends");

switch (inputInfo) {
    case "firstName":
        console.log(vedant1["firstName"]);
        break;
    case "lastName":
        console.log(vedant1["lastName"]);
        break;
    case "age":
        console.log(vedant1["age"]);
    case "friends":
        console.log(vedant["friends"]);
        break;
    default:
        console.log("sorry you have selected the wrong sentence make sure you have wrriten spellings correctly");
}



