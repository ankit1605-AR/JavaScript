let student ={
    name:"Ankit",
    email:"ankit@gmail.com",
    role:"developer",
}
// console.log(student);

const product = {
    name:"Laptop",
    price:"50,000",
    category:"Electronics"
}
// console.log(product.name);
// console.log(product.price);

// console.log(student["email"]);

const {name}=student;
// console.log(name);


const student1 ={
    name:"Rahul",
    role:"student"
}
student1.role ="developer"
// console.log(student1);
let obj={
    isLoggedIn:true,
}
let obj1={...student,...obj}
console.log(obj1);