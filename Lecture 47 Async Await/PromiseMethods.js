

// function fun1(){
//     return Promise.resolve("fun1")
// }
// function fun2(){
//     return Promise.resolve("fun2")
// }
// function fun3(){
//     return Promise.reject("fun3")
// }

// let result = Promise.all([fun1(),fun2(),fun3()])

// // console.log(result);
// result.then(data=>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err);
// })


function fun1(){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("fun1")
        }, 3000);
    })
}
function fun2(){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("fun2")
        }, 1000);
    })
}
function fun3(){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            reject("fun3")
        }, 5000);
    })
}

// let result = Promise.all([fun1(),fun2(),fun3()])
// let result = Promise.allSettled([fun1(),fun2(),fun3()])
// let result = Promise.race([fun1(),fun2(),fun3()]) // jo sabse pahle complete ho
let result = Promise.any([fun1(),fun2(),fun3()]) // jo sabse pahle fulfil ho gaya

// console.log(result);
result.then(data=>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})