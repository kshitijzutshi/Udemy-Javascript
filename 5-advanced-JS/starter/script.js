// // Function constructors -- blueprint

// var john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher",
// };

// //  constructor function always capital
// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   //   this.calculateAge = function () {
//   //     console.log(2020 - this.yearOfBirth);
//   //   };
// };

// /*  Use this cons function to create obj. => object instantiation
//     1. using new, an empty object is created => new execution context is created which is accessed by the this variable
//     2. Now the constructor function, here with name of Person is called..along with the parameters passed.
//     3. NOW this calculateAge() function is in the constructor function => each time new object created we essentialy have 3 repeated calculate age fns
//        Hence to solve this we can add the calculateAge method to the prototype property

// */

// // Inheritence -> whatever methods we want the constructor function to have, we put them in the prototype property.
// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = "Smith";

// var john = new Person("John", 1992, "teacher");

// john.calculateAge();

// var jane = new Person("Jane", 1969, "designer");

// jane.calculateAge();

// var mark = new Person("Mark", 1948, "retired");

// mark.calculateAge();

// console.log(Person.prototype);

/*  

Using Object.create method

*/

// var personProto = {
//   calculateAge: function () {
//     console.log(2020 - this.yearOfBirth);
//   },
// };

// var john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = "teacher";

// var jane = Object.create(personProto, {
//   name: { value: "Jane" },
//   yearOfBirth: { value: 1969 },
//   job: { value: "designer" },
// });

/*

  Primitives vs Objects  ---> and in Funcions

*/

// // Primitives
// var a = 23;
// var b = a;
// a = 46;

// console.log(a);
// console.log(b);

// // Objects
// var obj1 = {
//   name: "John",
//   age: 30,
// };

// var obj2 = obj1;

// obj1.age = 26;
// console.log(obj1.age);
// console.log(obj2.age);

// // Functions

// var age = 27;
// var obj = {
//   name: "kshitij",
//   city: "chennai",
// };

// function change(a, b) {
//   a = 30;
//   b.city = "SFO";
// }

// change(30, obj);

// console.log(age);
// console.log(obj.city);

/*

///////////// PASSING FUNCTIONS AS ARGUMENTS ////////

*/

// var year = [1960, 1963, 1991, 1995, 1996, 2002];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function CalculateAge(el) {
//   return 2020 - el;
// }

// function fullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(year, CalculateAge);
// var fullAges = arrayCalc(ages, fullAge);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);

/*

/////////////// FUNCTIONS RETURNING FUNCTIONS ////////////
First class functions are basically objects in JS so we can return them.

*/

// function interviewQuestions(job) {
//   if (job === "designer") {
//     return function (name) {
//       console.log(
//         name + ", can you please explain what is prototype chain in Javascript?"
//       );
//     };
//   } else if (job === "teacher") {
//     return function (name) {
//       console.log("What subjects do you teach, " + name + "?");
//     };
//   } else {
//     return function (name) {
//       console.log("Hello " + name + ", what do you do?");
//     };
//   }
// }

// var teacherQuestion = interviewQuestions("teacher");

// teacherQuestion("John");

// var designerQuestion = interviewQuestions("designer");

// designerQuestion("John");

// interviewQuestions("designer")("Zutshi");

/*

///////////////// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE) /////////////


*/

// (function () {
//   var score = Math.random() * 10;
//   console.log(score);
//   console.log(score >= 5);
// })();

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score);
//   console.log(score >= 5 - goodLuck);
// })(5);

/*


//////////////////// CLOSURES ///////////////////////


*/

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

// SAME AS retirement(66)(1996);

var retirementUS = retirement(66);

retirementUS(1996);

var retirementGermany = retirement(65);
retirementGermany(1996);

var retirementIceland = retirement(67);

retirementIceland(1996);
