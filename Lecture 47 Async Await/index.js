

// async function fun2() {
//     // console.log("hii");
//     return 20;
// }
// function fun1() {
//     // console.log("Hello");
//     return Promise.resolve(10);
//     return 10;
// }
// // fun2()
// // fun1()
// // fun2()

// console.log(fun2()); // always return aa promise
// console.log(fun1());


// async function fun2() {
//     return 20;
// }
// function fun1() {
//     return 10;
// }

// fun2().then((data)=>{
//     console.log(data);
// })
// console.log(fun1());



// async function fun3() {
//     return "Hello";
// }
// function fun4() {
//     return Promise.resolve("Ankit")
// }

// // async function fun4() {
// //     fun3().then((data) => {
// //         console.log(data);
// //     })
// // }
// console.log("1");

// async function fun5() {
//     // let data1 = await fun3();
//     // let data2 = await fun4();
//     // console.log(data1,data2);

//     console.log("2");
//     let data1 = await fun3();
//     console.log("3");
//     let data2 = await fun4();
//     console.log("4");
//     console.log(data1, data2);
// }
// console.log("Welcome");
// fun5()
// console.log("5");



// async function fun3() {
//     return "Hello";
// }
// function fun4() {
//     return Promise.reject("Error aa gaya")
// }
// async function fun5() {
//     try {
//         let data1 = await fun3();
//         let data2 = await fun4();
//         console.log(data1, data2);
//     } catch (err) {
//         console.log(err);
//     } finally{
//         console.log("always run this code");
//     }
// }
// fun5()




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

function addCart() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to cart...");
        setTimeout(function fun1() {
            console.log("Pizza Added to cart");
            resolve()
        }, 2000)
    })
}

function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log("payment Initiated , Amount : ", price);
        setTimeout(() => {
            let isPaymentSucces = true;
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


// let res = searchPizza();
// res.then(function (price) {
//     // console.log(price);
//     return addCart(price)
// }).then(function (price) {
//     // console.log(price);
//     return payment(price)
// }).then(function () {
//     console.log("Bas aa hee gaya pizza");
// }).catch(function(err){
//     console.log(err);
// })


async function orderFood() {
    try {
        let price = await searchPizza();
         await addCart();
         await payment(price);
    } catch (error) {
        console.log(error);
    }
}
orderFood()
