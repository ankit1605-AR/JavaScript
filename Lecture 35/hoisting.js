let x=6;
// function random(){
//     console.log(x);
//     var x=3;
// }
// random()

let city ="Delhi";
function printCity(){
    console.log(city);
}

function random(fn){
    let city ="Varansi";
    fn();
}

// random(printCity);

function outter(){
    function inner(){
        console.log(10);
    }
    return inner
    // return inner() // undefined
}
let inner= outter()
// inner()
