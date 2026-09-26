function average(sub1,sub2,sub3){
    if(sub1<40 || sub2<40 ||sub3<40) return console.log("Fail");
    return (sub1 + sub2 + sub3)/3;
} 
let result= average(60,60,60);
if(result>=75) console.log("Distinction");
else if(result>=60) console.log("Frist Division");
else if(result>=50) console.log("Second Division");
else if(result>=40)console.log("Pass");