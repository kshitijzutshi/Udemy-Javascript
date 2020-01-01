// On logging this keyword
/*
This points to WINDOW OBJECT which is the default object
thisvar.js:1 
Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
*/
// console.log(this);


// calculateAge(1995);
// // Until its a method call, the this keyword always points to the window object.
// function calculateAge(year){
//     console.log(2016-year);
//     console.log(this); // again window object
// }

var john = {
    name:'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016-this.yearOfBirth);

        // Here function is regular function call hence this will point to window object(default)
        // function innerFunction(){
        //     console.log("Inner function "+this); // this here points to window obj
        // }
        // innerFunction();
    }
};


/*
Status of this keyword 
﻿
thisvar.js:21 
{name: "John", yearOfBirth: 1990, calculateAge: ƒ}
name: "John"
yearOfBirth: 1990
calculateAge: ƒ ()
__proto__: Object 
*/

john.calculateAge();



var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

// METHOD BORROWING for age calc
mike.calculateAge = john.calculateAge;

mike.calculateAge();