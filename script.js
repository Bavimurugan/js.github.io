function variableFunction() {
    var num = 10;
    console.log(num);
    if (true) {
        var num = 50;
        console.log(num);
    }
    var num = 20;
    console.log(num);
}
variableFunction();

// let example
function letVariableFunction() {
    let value = 20;
    console.log(value);
    if (true) {
        let value = 40;
        value = 30;
        console.log(value);
    }
    console.log(value);
}
letVariableFunction();

// const example
function constVariableFunction() {
    const fixedValue = 30;
    console.log(fixedValue);
    if (true) {
        const fixedValue = 60;
        console.log(fixedValue);
    }
    console.log(fixedValue);
}
constVariableFunction();

// data types
var number = 10;
console.log(typeof number);
var greeting = "hello";
console.log(typeof greeting);
var isFalse = false;
console.log(typeof isFalse);
var emptyValue = null;
console.log(typeof emptyValue);
var undefinedValue;
console.log(typeof undefinedValue);

// synchronous function
function syncFunction() {
    console.log("a");
    console.log("b");
    console.log("c");
}
syncFunction();

// asynchronous function
function asyncFunction() {
    console.log("welcome");
    function play() {
        console.log("guys");
    }
    setTimeout(play, 5000);
    console.log("everyone");
    console.log("allofus");
}
asyncFunction();
