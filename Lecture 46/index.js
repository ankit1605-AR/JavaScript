

// const p = new Promise(function (resolve,reject){

//     // resolve("Hello")
//     // reject("Server down hai");
// })


// console.log(typeof p); // Object
// console.log(p);

// new Promise(function(){ // it is work
//     console.log("Hello"); 
// })


// const p = new Promise(function (resolve, reject) {

//     // resolve("Hello");
//     reject("Server down hai");
// })

// p.then(function onFulfilled(val){
//     console.log(val);
// },function onRejected(val){
//     console.log(val);
// })

// p.then(function (val){
//     console.log(val);
// },function (val){
//     console.log(val);
// })

// const res = p.then(function (val){
//     console.log(val);
// })
//     .then()
//     .then()
//     .catch(function (val){ // Only Rejected
//         console.log(val);
//     } )
//     .finally(function (){
//         console.log("Ye to always chalega");
//     })


// console.log("a");

// const p2 = new Promise(function f1(resolve,reject){
//     console.log("b");
//     resolve("Hello")
// })

// p2.then(function f2(val){
//     console.log("then");
//     console.log(val);
// }).catch(function f3(){
//     console.log("catch");
// }).finally(function  f4(){
//     console.log("finally");
// })

// console.log("c");

// const p3 = new Promise(function f1(resolve,reject){
//     resolve();
// })

// Promise.resolve().then(function f2(){
//     console.log("Inside resolve promise f2");
// })

// p3.then(function f3(){
//     console.log("f3 function");
// })


// function searchPizza(){
//     const p = new Promise(function (resolve,reject){
//         console.log("Pizza searching...");
//         setTimeout(function fun1(){
//             console.log("Here is the Pizza's Menu.");
//             let price = 500;
//             resolve(price)
//         },2000)
//     })
//     return p;
// }
// searchPizza().then(function(price){
//     console.log(price);
// })



function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza searching...");
        setTimeout(function fun1() {
            console.log("Here is the Pizza's Menu.");
            let price = 500;
            resolve(price)
        }, 2000)
    })
}

function addCart(price) {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to cart...");
        setTimeout(function fun1() {
            console.log("Pizza Added to cart");
            resolve(price)
        }, 2000)
    })
}

function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log("payment Initiated , Amount : ", price);
        setTimeout(() => {
            let isPaymentSucces = false;
            if (isPaymentSucces) {
                console.log("payment completed , Amount : ", price);
                resolve()
            }
            else{
                reject("Payment is Fail");
            }

        }, 5000);
    })
}

let res = searchPizza();

res.then(function (price) {
    // console.log(price);
    return addCart(price)
}).then(function (price) {
    // console.log(price);
    return payment(price)
}).then(function () {
    console.log("Bas aa hee gaya pizza");
}).catch(function(err){
    console.log(err);
})


