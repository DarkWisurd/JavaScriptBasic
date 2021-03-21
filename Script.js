let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("vedant");

// let firstName = "vedant";
// console.log(firstName);

let country = "India";
let popolation = 1.35;
let contitant = "Asia";

// lecture 2 
console.log(country, popolation, contitant);

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
console.log('23' / '2');
/*
Truthy And Falsy values*/

/* 5 falsy values of javascript:
1)0
2) ""
3)undefined
4)null
5)NaN
*/


console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("vedant"))
console.log(Boolean({}))



const money = 100000000000000000000000000000000000000000000000000000000000000000000000;
if (money) {
    console.log("Don's spend it all");
}
else {
    console.log("go get a job and come back when you have money");

}

// equality opretors(==/===)

const whyAreWeUsingAgeAllTheTime = 18;
if (whyAreWeUsingAgeAllTheTime === 18) console.log("you just became an adult :D (strict)");
if (whyAreWeUsingAgeAllTheTime == 18) console.log("you just became an adult :D (loose)");


const whyAreWeUsingAgeAllTheTimeStringItIs = "18";
if (whyAreWeUsingAgeAllTheTimeStringItIs === 18) console.log("you just became an adult :D (strict)");
if (whyAreWeUsingAgeAllTheTimeStringItIs == 18) console.log("you just became an adult :D (loose)");

//pretend that "==" dosent even exists

//creating somthing instresting with promp though i dont know what that means


// const username = prompt("enter username");

// if (username === "deshpandevedant37@gmail.com") {
//     alert("correct!");
// }
// else if (username === "chaitanyamegha@gmail.com") {//we can use else if as many times as we want in one if block
//     alert("correct!");
// }
// else {
//     alert("username or password incorrect")
// }
// const password = prompt("enter password");
// if (password === "Vedant@37") {
//     alert("correct")
// }
// else {
//     alert("username or password incorrect")
// }


// Logical opretors

const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
// hasGoodVision = true;
// hasDrivingLicense = false;
console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);


const shouldDrive = hasDrivingLicense && hasGoodVision;

if (shouldDrive) {
    console.log("you are able to drive!")
}
else {
    console.log("let someone else drive you are too young!")
}

//we most lickly use this rather than the one that is up
if (hasDrivingLicense && hasGoodVision) {
    console.log("you are able to drive!")
}
else {
    console.log("let someone else drive you are too young!")
}


const isTired = true;
console.log(hasDrivingLicense || hasGoodVision || isTired);

console.log(hasDrivingLicense && hasGoodVision && isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log("you are able to drive!")
}
else {
    console.log("let someone else drive !")
}




// The Switch Statement 

const day = "monday";

switch (day) {
    case "monday":
        console.log("somthing important");
        console.log("Classes");
        break;
    case "tuesday":
        console.log("JavaScript")
        break;
    case "wenesday":
    case "thuresday":
    case "fryday":
    case "saturday":
    case "sunday":
        console.log("Maths");
        break;
    default:
        console.log("you are not from this world there are only 7 days!");

}

if (day === 'monday') {
    console.log("IDK");
    console.log("IDK");
} else if (day === 'tuesday') {
    console.log("IDK");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("IDK");
} else if (day === 'friday') {
    console.log("IDK");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("IDK");
} else {
    console.log('you are not from this world there are only 7 days!');
}
console.log("just cheaking");


// The Conditional (Ternary) Operator 

const seeWeAreAlwaysUsengAge = 14;
seeWeAreAlwaysUsengAge >= 18 ? console.log("i like to drink wine") : console.log("I like to drink water ");// not used as much

const drink = seeWeAreAlwaysUsengAge >= 18 ? "Wine" : "Water"; // More Prefered 
console.log(drink);

let drink2;
// if - else virsion
if (seeWeAreAlwaysUsengAge >= 18) {
    drink2 = "wine"
}
else {
    drink2 = "water"
}

console.log(drink2);

// Template litral virsion

console.log(`I like to drink ${seeWeAreAlwaysUsengAge >= 18 ? "Wine" : "Water"}`)