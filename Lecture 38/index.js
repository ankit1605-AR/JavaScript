// "use strict"


// let student = {
//     name: "Ankit",
//     printName: function () {
//         // console.log(name); // name key same level par 
//         // hai therefore scoping work nhi karegi to ye error dega

//         console.log(this.name); 
//     }
// }
// // student.printName();
// let result = student.printName;
// result();


// console.log(this);
// console.log(global);

// function fun1(){
//     console.log(this);
// }
// fun1();

// let student ={
//     name:"Rahul",
//     printName:function (){
//         console.log("Hii",student.name); // Rahul
//         console.log("Hii",this.name); // Ankit
//     }
// }
// let student2 ={
//     name:"Ankit",
//     printName: student.printName,
// }
// student2.printName();

// let result = student.printName;
// student2.result(); // error


// let product ={
//     name:"Iphone",
//     printName : () =>{
//         console.log(this.name);
//     } 
// }

// let product ={
//     name:"Iphone",
//     printName :function(){
//         const print =()=>{
//             console.log(this.name);
//         }
//         print()
//     } 
// }

// product.printName();

// let hello="hii"
// function fun4() {
//     let name = "something"
//     let product = {
//         name: "Iphone",
//         printName: () => {
//             console.log(this.name);
//             console.log(this.hello);
//         }
//     }
//     product.printName();
// }
// fun4();

// let nestedFunction={
//     name : "Something",
//     fun: function(){
//         let product={
//             name:"Ipdone",
//             printName:() =>{
//                 console.log(this.name);
//             }
//         }
//         product.printName()
//     }
// }

// nestedFunction.fun()




let btn=document.getElementById("btn")

btn.addEventListener("click",(event)=>{
    console.log("Hii");
});