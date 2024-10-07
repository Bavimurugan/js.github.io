// Value Type Example


let a = 10;
let b = a; // b gets a copy of a's value
b = 20;    // a is still 10

console.log(a); // 10
console.log(b); // 20

// Reference Type Example

let obj1 = { key: "value" };
let obj2 = obj1; // obj2 references the same object as obj1
obj2.key = "new value"; // Modifying obj2 also affects obj1

console.log(obj1.key); // "new value"
console.log(obj2.key); // "new value"
