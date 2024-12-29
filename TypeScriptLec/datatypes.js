"use strict";
// let lname = 'jhon';
// //lname = 10;
/*
let lname : string;
lname = "Santosh";

let newname =lname.toUpperCase();

console.log(newname);
let age: number;

age = 25;
age = 25.5;
let dob = "25";

let result = parseInt(dob);

let isValid : boolean = false;
console.log(isValid);

*/
let empList;
empList = ["santosh", "santosh1", "santosh2"];
let numList;
numList = [1, 2, 3, 4, 5];
let newNum = numList[5];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
console.log(results);
console.log(num);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* color.Blue */;
//tupples
let swapNumbs;
function swapNumber(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumber(10, 20);
swapNumbs[0];
swapNumbs[1];
let department;
department = "IT";
department = 10;
