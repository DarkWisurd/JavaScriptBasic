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