
//hoisting with variable

console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5

//hoisting with function

console.log(myFunction());

function myFunction() {
    return "Wellcome to frontend!";

}

//hoisting with let
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;
console.log(myLet); // 10

//hoisting with const

console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 20;
console.log(myConst); // 20


