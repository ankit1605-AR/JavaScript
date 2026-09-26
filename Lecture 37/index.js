// function outter(){
//     const a=6;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// const response = outter();
// response() // 6

function outter(){
    let count=0;
    function counter(){
        count = count+1;
        console.log(count);
    }
    return counter;
}
const counter1 = outter();
const counter2 = outter();
counter1() 
counter2() 
counter1() 
counter2() 