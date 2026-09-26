// let product={
//     name:"phone",
//     price:1999,
//     avgRating:4.5, 
//     totalRevies:72,
//     discount:10,
//     221:"vivo",
// }

// console.log(product);
// console.log(product.name,product.price);
// console.log(product[221]);// both right, not always right
// console.log(product["221"]);// but this is better


// let product={
//     name:"phone",
//     price:1999,
//     avgRating:4.5, 
//     totalRevies:72,
//     discount:10,
//     221:"vivo",
//     printProductName:function(){
//         console.log("iphone 18 pro max");
//     },
//     printDiscount(){
//         console.log("10%");
//     }
// }

// console.log(product.printDiscount());
// console.log(product.printProductName());

// product.printProductName();

// this key

// let product={
//     productName:"iphone 18 pro max",
//     price:1999,
//     avgRating:4.5, 
//     totalRevies:72,
//     discount:10,
//     printProductName:function(){
//         console.log(this.productName);
//     },
//     printDiscount(){
//         console.log("10%");
//     }
// }

// product.printProductName();
// console.log(Object.keys(product)); // array form return
// console.log(Object.values(product));
// console.log(Object.entries(product)); // return array of array

//FOR LOOPS-for of loop,for in loop ,for each loop

// let product1=[568,98,986,955,"iphone"];

// for(value of product1){
//     console.log(value);
// }

// product1.forEach(function(value,index){
//     console.log(value,index);
// })

// for in  object par work karta hai

// for(value in product){
//     console.log(value);
// }

// for(value in product1){ // array me indexing milege
//     console.log(value);
// }

// for(value in product1){
//     console.log(product1[value]);
// }

// Destructuring

// let product1=[568,98,986,955,"iphone"];
// const [a,b,c,d,e]=[568,98,986,955,"iphone"];
// const [a,b,c]=product1;
// console.log(e);

let product={
    productName:"iphone 18 pro max",
    price:1999,
    avgRating:4.5, 
    totalRevies:72,
    discount:10,
    printProductName:function(){
        console.log(this.productName);
    },
    printDiscount(){
        console.log("10%");
    }
}

// let {price,avgRating}=product;
// console.log(price,avgRating);

// for([a,value ] of Object.entries(product)){
//     console.log(a,value);
// }

// let arr=[45,78,95,86,148,334,87,5];

// console.log(Math.min(arr)); //NaN
// console.log(...arr); // spired
// console.log(Math.min(...arr)); 

// let a=[1,2]
// let b=[3,4]
// let c=[...a , ...b] // array merging by spread operator
// console.log(c);
// console.log(...c);

// let arr=[45,78,95,86,148,334,87,5];
// const [a,b,c,...hello]=arr;
// console.log(hello);

// function add(...numbers){
//     // console.log(numbers);
//     let total=0;
//     for(value of numbers){
//         total += value;
//     }
//     return total;
// }
// console.log(add(4,5,6,7,8,9));

let {price,productName,...remaining}=product;//rest
console.log(price,productName,remaining);