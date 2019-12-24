var markMass,markHeight,johnMass,johnHeight;

markMass = 98;
markHeight = 1.8;

johnMass = 102;
johnHeight = 1.7;

var bmiMark = markMass / (markHeight * markHeight);
var bmiJohn = johnMass / (johnHeight * johnHeight);

console.log('bmiMark ' + bmiMark);
console.log('bmiJohn ' + bmiJohn);

var res = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s ? '+ res);