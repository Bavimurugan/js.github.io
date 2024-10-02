//for loop
for (let i = 0; i < 5; i++) {
    console.log("Wellcome to frontend ");
}

//for in
const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
//for of
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

//while
let i = 1;
let sum = 0;

while (i <= 10) {
    sum += i; // Add the current value of i to sum
    i++; // Increment i by 1
}

console.log(`The sum of numbers from 1 to 10 is ${sum}`);

//do while
let num = 1;

do {
    console.log("Number:", num);
    num++;
} while (num <= 5);

//if statement
let temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day!");
}


//if else
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);

//
