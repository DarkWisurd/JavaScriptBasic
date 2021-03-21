let markHight = 1.69;
let markWeight = 78;
let jhonWeight = 92;
let jhonHight = 1.96

let markBMI = markWeight / markHight ** 2;
console.log(markBMI);
let jhonBMI = jhonWeight / jhonHight ** 2;
console.log(jhonBMI);

// let markHigherBMI = markBMI > jhonBMI;
// console.log(markHigherBMI)

// 
if (markBMI > jhonBMI) {
    console.log(`mark's BMI ${markBMI} is higher than jhon's BMI ${jhonBMI}`)
}
else {
    console.log(`Mark's BMI ${jhonBMI} is higher than mark's BMI ${markBMI}`)
}



// Coding Challenge 2

// const teamDolphin = (96 + 108 + 86) / 3;      //Comenting Because of BONUS 1
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.com(teamDolphin, scoreKoalas);

// if (teamDolphin > scoreKoalas) {
//     console.log("Dolphin wins the trophy")
// }
// else if (scoreKoalas > teamDolphin) {
//     console.log("Koalas wins the trophy")
// }
// else if (teamDolphin === scoreKoalas) {
//     console.log("it's a tie!")
// }

// BONUs 1
// const teamDolphin = (97 + 112 + 101) / 3;  //* Comenting this Beacause of BONUS 2
// const scoreKoalas = (109 + 95 + 123) / 3;

// console.com(teamDolphin, scoreKoalas);

// if (teamDolphin > scoreKoalas && teamDolphin >= 100) {
//     console.log("Dolphin wins the trophy")
// }
// else if (scoreKoalas > teamDolphin && scoreKoalas >= 100) {
//     console.log("Koalas wins the trophy")
// }
// else if (teamDolphin === scoreKoalas) {
//     console.log("it's a tie!")
// }


//BONUS 2

const teamDolphin = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 87) / 3;

console.log(teamDolphin, scoreKoalas);

if (teamDolphin > scoreKoalas && teamDolphin >= 100) {
    console.log("Dolphin wins the trophy")
}
else if (scoreKoalas > teamDolphin && scoreKoalas >= 100) {
    console.log("Koalas wins the trophy")
}
else if (teamDolphin === scoreKoalas || teamDolphin < 100 || scoreKoalas < 100) {
    console.log("it's a tie!")
}


// coding challlenge 4

const bill = 275;
const tip = bill >= 50 ? bill / 100 * 15 : bill / 100 * 15;
console.log(`bill=${bill} tip = ${tip} total amount = ${bill + tip}`)