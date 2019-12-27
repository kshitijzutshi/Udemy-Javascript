function tipCalculator(amount){

    if(amount < 50){
        return 0.2 * amount;
       
    }
    else if(amount >=50 && amount < 200){
        return 0.15 * amount;
    }
    else if(amount >= 200){
        return 0.1 * amount;
    }
}

// var tipAmount1 = tipCalculator(124);
// var tipAmount2 = tipCalculator(48);
// var tipAmount3 = tipCalculator(268);

var bill = [124,48,268];
var tipArray = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];
var amountArray = [(bill[0]+tipArray[0]), (bill[1]+tipArray[1]), (bill[2]+tipArray[2])];

// tipArray.push(tipAmount1);
// tipArray.push(tipAmount2);
// tipArray.push(tipAmount3);
console.log('Tips for all bills are: '+tipArray);

// amountArray.push((124 + tipAmount1));
// amountArray.push((48 + tipAmount2));
// amountArray.push((268 + tipAmount3));
console.log('Final paid amounts are: '+amountArray);
