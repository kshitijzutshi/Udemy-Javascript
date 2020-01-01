// Lexical scoping chain example

var a = "Hello";
first();

function first(){
    var b = "Hey!";
    
    second();

    function second(){
        var c = "Hi";
        console.log(a+b+c);
    }
}

// Example to show the difference between Execution stack and scope chain

var a = "Hello";
first();

function first(){
    var b = "Hey!";
    second();

    function second(){
        var c = "Hi";
        // console.log(a+b+c);
        third();
    }
}

function third(){
    var d = "John";
    // console.log(c); // Error : scoping.js:35 Uncaught ReferenceError: c is not defined
    console.log(d+a); // As a and d in global execution context its visible.
}
    
