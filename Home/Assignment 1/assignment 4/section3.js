const product={
    name:"Laptop",
    price:50000,
}
const {name:productName}=product;
// console.log(productName);

const name="rahul";
const emali="ankit@gmail.com";
const role="developer";

const obj={name,emali,role}
// console.log(obj);

const user ={
    name:"Rahul",
    role:"developer",
}

const {...newUser} = user;
// console.log(newUser);

const frontend =["HTML","CSS","JavaScript"];
const backend =["Node.js","Express"];
const arr=[...frontend,...backend];
console.log(arr);