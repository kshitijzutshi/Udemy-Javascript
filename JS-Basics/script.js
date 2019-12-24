// Variables and Data types

// https://developers.google.com/web/tools/chrome-devtools/javascript/snippets

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);


// Variables mutation and type coercion


// type coercion Example
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried ;

job = 'teacher';
isMarried = false
console.log(firstName +' is a '+job + ' and is he married? ' + isMarried);

// Variable mutation
// age that was integer is now a string
age = 'twenty eight';
// alert(age);
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);


/*******************************
* Basic Operators
*/

var yearJohn = 2019 - 28;

alert(yearJohn);

// Logical oerators

var ageOld,ageNew;

ageOld = 33;
ageNew = 33;

var res = (ageOld > ageNew);
console.log(res);

// Type of operator

console.log(typeof res);

// Operator Precedence


// Multiple operators

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log('isFullAge '+isFullAge);

// Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var avg = (ageMark + ageJohn) / 2;
console.log(avg);


// Multiple Assignments - works from right to left

var x,y;
x = y =  (3 + 5) * 4 - 6;

console.log(x + ' ' + y);


// More Operators 

x = x * 2;
y *= 2;
console.log(x +'  '+ y);


/******************************
* If / else statements

*/

var firstName = 'John';
var civilStatus = 'single';
 

if(civilStatus === 'married'){
    console.log(firstName + ' is married');
}
else{
    console.log(firstName + ' is single');
}

// Ternary Operators and Switch statements

var age = 17;

age >= 18 ? console.log(' Legal to drink!') : console.log(' illegal to drink!');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);


Switch 

var job = prompt('Enter type of job');
switch(job){
    case 'teacher':
        console.log('teaches kids');
        break;
    case 'driver':
        console.log('drives uber');
        break;
    case 'coder':
        console.log('codes stuff');
        break;
    default:
        console.log('does something else');

}
