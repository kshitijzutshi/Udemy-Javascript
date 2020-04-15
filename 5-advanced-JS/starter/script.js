// Function constructors -- blueprint

var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher",
};

//  constructor function always capital
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  //   this.calculateAge = function () {
  //     console.log(2020 - this.yearOfBirth);
  //   };
};

/*  Use this cons function to create obj. => object instantiation
    1. using new, an empty object is created => new execution context is created which is accessed by the this variable
    2. Now the constructor function, here with name of Person is called..along with the parameters passed.
    3. NOW this calculateAge() function is in the constructor function => each time new object created we essentialy have 3 repeated calculate age fns
       Hence to solve this we can add the calculateAge method to the prototype property

*/

// Inheritence -> whatever methods we want the constructor function to have, we put them in the prototype property.
Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

var john = new Person("John", 1992, "teacher");

john.calculateAge();

var jane = new Person("Jane", 1969, "designer");

jane.calculateAge();

var mark = new Person("Mark", 1948, "retired");

mark.calculateAge();

console.log(Person.prototype);

/*
PROTOTYPE CHAINING AS SEEN IN CONSOLE OF BROWSER





*/
