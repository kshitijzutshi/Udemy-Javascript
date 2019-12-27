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
// var lastName = prompt('What is his last name?');
var lastName = 'Smith';
console.log(firstName + ' ' + lastName);


/*******************************
* Basic Operators
*/

var yearJohn = 2019 - 28;

// alert(yearJohn);

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


// Switch 

// var job = prompt('Enter type of job');
var job = 'teacher';
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


// Truthy and Falsy values

// Falsy values are : undefined, null, 0, '' , NaN

// Truthy values : all values that are not falsy in say If else ladder

// Equality operators 

var height;

height = 23;

if(height || height === 0){
    console.log('Variable is defined');
}
else{
    console.log('Variable has NOT been defined');
}

// THE == OPERATOR DOES NOT DO TYPE COERCION BUT THE === DOES

if(height === '23'){
    console.log('The === operator does not do type cooercion!');
}

if(height == '23'){
    console.log('The == operator does type cooercion!');
}

/************************* 
 * Functions
 * 
*/

function calculateAge(birthYear){
    
    return 2018-birthYear;
}

// console.log('The Age is  '+ calculateAge(1990));

function yearsUntilRetirement(year,firstName) {

    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement < 0){
        console.log(firstName + ' has already retired')
    }
    else{
 // A function need not always return something
 console.log(firstName + ' retires in '+ retirement + ' years. ');
    }
   
}

yearsUntilRetirement(1948,'John');

/*********************************
 * Function Statements and Expressions
 * 
 * 
 */

// Function Declaration

// function whatDoYouDo(job,firstName){}


// Function Expression 
var whatDoYouDo = function (job, firstName){

    switch(job){
        case 'teacher':
            // IF WE USE RETURN THEN BREAK NOT REQUIRED AS IT EXISTS THE FUNCTION
            return firstName + ' teaches kids.';

        case 'driver':
            return firstName + ' drives Uber.';

        case 'designer':
            return firstName + ' designs websites.';
        
        default:
            return firstName + ' does something else.';

    }
}

console.log(whatDoYouDo('teacher', 'John'));


/**********************************
*   Objects and properties
*
*/

var obj1 = {
        firstName: 'John',
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane','Mark','Bob','Emily'],
        job: 'teacher',
        isMarried: false
};

console.log(obj1.firstName);
// Another way to access the key value pair in objects 

console.log(obj1['lastName']);

var x = 'birthYear';
console.log(obj1[x]);

// Modifying values in objects

obj1.job = 'designer';
obj1['isMarried'] = true;
console.log(obj1);
