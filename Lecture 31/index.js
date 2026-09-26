// for(let i=1;i<=100;i++){
//     console.log(i);
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// let i=1;
// do{
//     console.log(i);
//     i++;
//     if(i==10) break;
// }while(true);


// for(let i=1;i<=50;i++){
//     if(i%2 !==0) continue;
//     console.log(i);
// }

// function totalMarks(){
//     console.log("hello");
// }
// totalMarks();


// function totalMarks(a){
//     console.log("hello");
//     console.log(a);
// }
// totalMarks(5);

// function calculator(num1, num2, operator){
//     switch(operator){
//         case "+": console.log(`${num1} ${operator} ${num2} =`,num1+num2);
//         break;
//         case "-": console.log(`${num1} ${operator} ${num2} =`,num1-num2);
//         break;
//         case "*": console.log(`${num1} ${operator} ${num2} =`,num1*num2);
//         break;
//         case "/": console.log(`${num1} ${operator} ${num2} =`,num1/num2);
//         break;

//     }
// }
// calculator(4,8,"+");
// calculator(4,8,"-");
// calculator(4,8,"*");
// calculator(4,8,"/");


// function greeringMsg(name="Guset", greeting="Hii"){
//     console.log(`${greeting},${name}`);
// }
// greeringMsg("ankit")
// greeringMsg("rahul", "Hello")
// greeringMsg()
// greeringMsg("Kushwaha","ankit", 200,65)//Ignore last two argument


// function totalMarks(math,science,sanskrit){
//     let totalnums= math+science+sanskrit;
//     return totalnums;
// }
// function calPercentage(student,math,science,sanskrit){
//    let percentage = totalMarks(math,science,sanskrit)/3;
//    console.log(`${student} =`,percentage);
// }
// calPercentage("Ankit",98,96,94)
// calPercentage("Rahul",98,56,98)

// FUNCTION EXPERETION

// let add= function(num1,num2){
//     return num1+num2;
// }
// console.log(add(5,6));

// ARROW FUNCTION

// let add= (num1,num2) =>{
//     return num1+num2;

// }
// let add= num1 => num1+4;
let add = (num1,num2) => num1+num2;

console.log(add(5,6));