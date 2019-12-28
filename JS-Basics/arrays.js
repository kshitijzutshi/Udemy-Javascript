/*****************************
 * Arrays
 * 
 */

 var names = ['John','Mark','Jane'];
 var years = new Array(1990,1969,1948);

 names[5] = 'KZEE';
 console.log(names);
 console.log(names.length);
 names[1] = 'Ben';
 names.pop();
 names.shift();
 names.unshift('bata');
 console.log('---------------------------------------------------------');
 console.log(names);
 console.log(names.length);
//  console.log('5th name is '+names[5]);

 // Mutate the data in array

//  names[1] = 'Ben';
//  names.pop();
//  console.log(names[5]);