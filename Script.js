let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("vedant");

// let firstName = "vedant";
// console.log(firstName);

let country = "India";
let popolation = 1.35;
let contitant = "Asia";

// lecture 2 
console.log(country);
console.log(popolation);
console.log(contitant);

let isIsland = false;
let language;
console.log(typeof country);
console.log(typeof contitant);
console.log(typeof popolation);
console.log(typeof isIsland);
console.log(typeof language);

const Language = "maharati"


const ageVedant = 2045;
const birthYearVedant = 2007;
console.log(ageVedant - birthYearVedant)

popolation = popolation / 2;
console.log(popolation);
popolation++;
console.log(popolation < 2000000);
console.log(popolation < 13000000);
//strings

const firstName = "vedant";
const grade = "8th";
const birthYear = 2007
const yeat = 2021;

const vedant = "i'm " + firstName + " in Grade " + grade + (yeat - birthYear) + " years old";
console.log(vedant);
// Templet Strings
const vedantNew = `i'm ${firstName} in grade ${grade} ${yeat - birthYear} years old `;
console.log(vedantNew);

console.log(`cheaking if backticks cnan be used in a regular string`);
console.log(`just 
cheaking
multiple
line
string`);



//Decision Making


const age = 15;
// const ageOfSecondPersone = 26;
if (age >= 18) {
    console.log("you are eligible!");

}
else {
    // console.log("Sorry! you are not eligible");
    const yearsRequired = 18 - age;
    console.log(`you are too young. wait another ${yearsRequired} years`)
    // console.log("years are required to be eligible");
}

// const birthYearNew = 2007;
// let century;
// if (birthYearNew <= 2000) {
//     century = 21;
// }
// else {
//     Century = 20;
// }

//*Conversion and Coercion*

//type convertion 

const inputYear = "2007";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
// console.log(Number(firstName))


console.log(String(4596))
//type coercion

console.log("i'm " + 23 + " YO")

console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2')