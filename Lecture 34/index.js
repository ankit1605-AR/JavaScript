let student = {
    name : "Ankit",
    rollNo : 12,
    subject : ["math","english","hindi"],
}
// let {subject : vishay,...varible} = student;
// console.log(vishay,varible);

// let {subject : vishay,totalMark = 500,...varible} = student;
// console.log(vishay,totalMark,varible);


// objects marging
let obj1 ={
    name:"ankit",
    mobile:7839646211,
}
let obj2 ={
    address:"india",
    aadharCard :456812639874,
    name:"Rahul"
}
let obj3={...obj1 , ...obj2}
// console.log(obj3);

// Array and Object update

const arr=[1,2,3,4];
arr[1]="update";
// console.log(arr);


const obj ={
    name : "ankit",
    rollNo: 12,
    address:null,
}
// obj={
//     add:"india",//error
// }

// obj["name"]="Rahul";
// obj.name ="rahul";

// delete obj.rollNo; // Property deleted

// console.log(obj);
// console.log(obj.address); // error de sakta hai
// console.log(obj?.address);
// console.log(obj.address?.street);


// let arr1=[1,2,3,4,5,6];
// arr1.splice(2,2);// delete
// arr1.splice(3,0,"hello");// add
// arr1.splice(3,2,"Ankit");// replace
// console.log(arr1);

//slice

// let arr1=[1,2,3,4,5,6];
// let trimArr = arr1.slice(1,3);
// console.log(trimArr);

let arr1=[1,2,3,4,5,6];

// console.log(arr1.indexOf(6));
// console.log(arr1.indexOf(55));// -1 output

// let res = arr1.find((value)=>{
//     return value===3;
// }) 
// console.log(res);

// let res = arr1.find((value)=>{
//     return value==="3";// undefined
// }) 
// console.log(res);

// let resIndex = arr1.findIndex((value)=>{
//     if(value===3){
//         return value;
//     }
// }) 
// console.log(resIndex);

// flat

// let arr3=[1,2,3,4,5,[6,7,8,[4,5,6,9]]];
// console.log(arr3.flat(Infinity));
// console.log(arr3);


// mutability

/*let arr4=[1,35,6,9,46,12,4,6];
let arrcopy=arr4;
let arrCopy2 =[...arr4]
// arrcopy.pop();
arrCopy2.pop();
console.log(arrCopy2);
// console.log(arrcopy);
// console.log(arr4);*/


