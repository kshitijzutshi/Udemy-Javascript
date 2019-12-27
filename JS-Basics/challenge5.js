// var bill = [124,48,268,180,42];

var billObject ={
    billJohn: [124,48,268,180,42],
    billMark: [77,375,110,45],
    tipJohn: [],
    tipMark: [],
    finalAmountJohn: [],
    finalAmountMark: [],
    calcTipJohn: function(){
        for (var i = 0; i < this.billJohn.length; i++){
            if(this.billJohn[i] < 50){
                this.tipJohn.push(0.2 * this.billJohn[i]);
                this.finalAmountJohn.push(this.billJohn[i] + 0.2 * this.billJohn[i]);
       
            }
            else if(this.billJohn[i] >=50 && this.billJohn[i] < 200){
                this.tipJohn.push(0.15 * this.billJohn[i]);
                this.finalAmountJohn.push(this.billJohn[i] + 0.15 * this.billJohn[i]);
            }
            else if(this.billJohn[i] >= 200){
                this.tipJohn.push(0.1 * this.billJohn[i]);
                this.finalAmountJohn.push(this.billJohn[i] + 0.1 * this.billJohn[i]);
            }
        }
        },
        calcTipMark: function(){
        for (var i = 0; i < this.billMark.length; i++){
            if(this.billMark[i] < 100){
                this.tipMark.push(0.2 * this.billMark[i]);
                this.finalAmountMark.push(this.billMark[i] + 0.2 * this.billMark[i]);
       
            }
            else if(this.billMark[i] >=100 && this.billMark[i] < 300){
                this.tipMark.push(0.1 * this.billMark[i]);
                this.finalAmountMark.push(this.billMark[i] + 0.1 * this.billMark[i]);
            }
            else if(this.billMark[i] >= 300){
                this.tipMark.push(0.25 * this.billMark[i]);
                this.finalAmountMark.push(this.billMark[i] + 0.25 * this.billMark[i]);
            }
        }
        },
        calcTipAvg: function(){
            var sumTipJohn = 0;
            var sumTipMark = 0;
            this.tipAvgJohn;
            this.tipAvgMark;


            for(var j = 0; j < this.tipJohn.length; j++){
                sumTipJohn = sumTipJohn + this.tipJohn[i];
                
            }
            this.tipAvgJohn = sumTipJohn/this.tipJohn.length;
            return this.tipAvgJohn;
            
            
            for(var j = 0; j < this.tipMark.length; j++){
                sumTipMark = sumTipMark + this.tipMark[i];
                
            }
            this.tipAvgMark = sumTipMark/this.tipMark.length;
            return this.tipAvgMark;

        }
        
}

billObject.calcTipJohn();
billObject.calcTipMark();
billObject.calcTipAvg();
// console.log(billObject.tip);
// console.log(billObject.finalAmount);

console.log('John\'s tip array: '+billObject.tipJohn);
console.log('Mark\'s tip array: '+billObject.tipMark);

console.log('John\'s average tip array: '+billObject.tipAvgJohn);
console.log('Mark\'s average tip array: '+billObject.tipAvgMark);

if(billObject.tipAvgJohn > billObject.tipAvgMark){
    console.log('John\'s family paid highest tips on average.');
}
else{
    console.log('Mark\'s family paid highest tips on average,'+ 'with average of $'+billObject.tipAvgMark);
}

console.log(billObject);

