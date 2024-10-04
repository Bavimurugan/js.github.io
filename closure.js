function greetWorld() {
    var sayGreeting = function() {
        console.log(greeting); // Accessing the outer variable
    };
    // Local variable that ends up within the closure
    var greeting = 'Hello, world!';
    return sayGreeting; // Return the inner function (closure)
}

var greetClosure = greetWorld(); 
greetClosure(); // Logs: 'Hello, world!'
