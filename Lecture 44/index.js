// console.log("Task 1");
// console.log("Task 2");
// // for(let i=1; i<10000000;i++){

// // }

// let startTime = Date.now()
// while(Date.now() - startTime < 1000){

// }
// console.log("Task 3");




// console.log("task 1");

// function ch (){
//     console.log("task 3");
// }

// setTimeout(ch)
// setTimeout(() => {
//     console.log("task 3");
//     for (let i = 1; i < 10000000; i++) {

//     }
// }, 0);
// console.log("task 2");

// console.log("task 1");
// setTimeout(() => {
//     console.log("task 2");
// }, 4000);

// setTimeout(() => {
//     console.log("task 5");
// }, 1000);

// setTimeout(() => {
//     console.log("task 4");
// }, 2000);

// console.log("task 3");


// setIntraval

// setInterval(()=>{
// console.log("hii");
// },1000)


let count = 1;
let id = setInterval(() => {
    if(count>5){
        clearInterval(id)
    }
    count++;
    console.log("hii");
}, (0));