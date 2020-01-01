/////////////////////
//Lecture Hoisting//
///////////////////


calculateAge(1965);

function calculateAge(year){

    console.log(2016-year);
}



// Unlike the above, this is function expression and not function declaration!

// retirement(1990);

// var retirement = function(year){

//     console.log(65-(2016-year));
// }

// Hoisting in Variables

// If we put variable printing before we get underfined as its variable object is not created before execution
foo();
console.log(age);

var age = 23;

function foo(){
    // This age var is created in a global execution context
    var age = 65;
    console.log("age in function: "+age);
}


console.log("age outside function: "+age);
