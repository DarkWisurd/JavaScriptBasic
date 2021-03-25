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
console.log(tips);

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

const Mark = {
    firstName: "Mark",
    Mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.Mass / (this.height * this.height);
        return this.BMI;
    }
}
const John = {
    firstName: "Jhon",
    Mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.Mass / (this.height * this.height);
        return this.BMI;
    }
}
if (Mark.calcBMI() > John.calcBMI()) {
    console.log("Mark's BMI is higher")
}
else {
    console.log("Jhon's BMI is higher")
}

