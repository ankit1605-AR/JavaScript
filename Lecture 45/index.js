

// function fun1(callback){
//     console.log("Hii");
//     callback()
// }

// function cd(){
//     console.log("This is callback function");
// }
// fun1(cd);


function searchPizza(cb1){
    console.log("Pizza searching...");
    setTimeout(() => {
        console.log("Here is the Pizza's Menu. ");
        let price=500;
        cb1(price);
    }, 2000);
}
function addToCart(cb2){
    console.log("Pizza adding to cart..");
    setTimeout(() => {
        console.log("Pizza added to cart");
        cb2();
    }, 3000);
}

function paymet(price,cb3){
    console.log(`Paymet Initiated,Amount :${price}`);
    setTimeout(() => {
        console.log(`Paymet Completed, Amount : ${price} `);
        cb3();
    }, 5000);
}
// let output = searchPizza();
// console.log(output); // undefined 

searchPizza(function (price){
    // console.log(price);
    addToCart(function (){
        paymet(price, function(){
            console.log("Bas aa hi gaya pizza");
        })
    })
})




