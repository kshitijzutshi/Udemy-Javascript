var mark = {

    fullName: 'Mark',
    mass: 98,
    height: 1.8,
    calcBmi: function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};
var john = {

    fullName: 'John',
    mass: 102,
    height: 1.7,
    calcBmi: function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};

if(mark.calcBmi() > john.calcBmi()){
    console.log(mark.fullName+' has higher BMI, with a BMI value of '+mark.bmi);
}
else if(mark.calcBmi() < john.calcBmi()){
    console.log(john.fullName+' has higher BMI, with a BMI value of '+john.bmi);
}
else{
     console.log('Both '+john.fullName+' and '+mark.fullName+' have the same BMI, with a BMI value of '+john.bmi);
}