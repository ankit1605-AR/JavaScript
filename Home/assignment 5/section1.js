let arr=["Laptop","mobile","headphones"]
let arr1 = arr.map((name)=>name.toUpperCase())
// console.log(arr1);

let cur=[100,250,500]
let updatedPrices=cur.map(currency => `₹${currency}`) 
console.log(updatedPrices);