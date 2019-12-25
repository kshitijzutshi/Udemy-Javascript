const chalk = require('chalk');
johnAverage = (89+120+144)/3;
mikeAverage = (116+94+100)/3;
maryAverage = (97+134+101)/3;

if(johnAverage > mikeAverage && johnAverage > maryAverage){
    console.log(chalk.red.inverse('John\'s team is the winner with average of ')+ chalk.red.inverse(johnAverage)+chalk.red.inverse(' points'));
}
else if(mikeAverage > johnAverage && mikeAverage > maryAverage){
    console.log(chalk.blueBright.inverse('Mike\'s team is the winner with average of ')+ chalk.blueBright.inverse(mikeAverage)+chalk.blueBright.inverse(' points'));
}
else{
    
    console.log(chalk.green.inverse('Mary\'s team is the winner with average of ')+ chalk.green.inverse(maryAverage)+chalk.green.inverse(' points'));
}