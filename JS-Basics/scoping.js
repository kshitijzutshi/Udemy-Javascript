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
