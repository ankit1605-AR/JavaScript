let units = 300; 
let units1 = units;
let totalBill=0;

if(units<100){
    totalBill=(units*5);
    units=0;
} 
else if(units>=100){
    totalBill =100*5;
    units = units-100;
    if(units>=0 && units<=100) totalBill =totalBill+ (units*7);
    else{
        totalBill=totalBill+(100*7);
        units =units-100;
    }
} 
if(units>0) totalBill = totalBill+(units*10);
let discount =0;
if(totalBill >2000) discount = totalBill *.1;
let finalBill = totalBill - discount;
console.log(units1);
console.log(discount);
console.log(totalBill);
console.log(finalBill);