
// let user = {
//     name :"ankit"
// }
// // console.log(obj);
// Array.prototype.PrintItems = function (arr){
//     for(let i=0;i<this.length;i++){
//         console.log(this[i]);
//     }
// }

// let arr=[1,2,3]
// // console.log(arr);
// // console.log(arr.__proto__.__proto__=== user.__proto__);
// console.log(arr.__proto__);
// // arr.PrintItems(arr);

// let colour = ["red","yellow","green"]

// // colour.PrintItems(colour);
// colour.PrintItems();
// arr.PrintItems();

// // let a=[1,2].PrintItems();

// // String.prototype.ankit = function(){
// //     console.log("hello ye maine banaya hai string prototype");
// // }

// // "swghjjbgnhkmgtyn".ankit();


// String.prototype.firstTwoCharacters = function(){
//     console.log(this[0] + this[1]);
//     // return this[0] + this[1];
// }
// let ch="Ankit".firstTwoCharacters();
// // console.log(ch);

// Object.prototype.AllInOne = function(){
//     console.log("All in one hu mai because i am object");
// }

// "ankit".AllInOne();
// arr.AllInOne();
// user.AllInOne();

// function random1(){
    
// }
// random1.AllInOne()
// // 1.AllInOne()  // Not valid
// Number(1).AllInOne()

// SHADOWING

let user = {
    name:"Ankit",
    toString(){
        console.log("ye apna method hai");
    }
}
// console.log(user.toString());
// user.toString()

let common = {
    eat(){
        console.log("eat");
    }
}
let person = Object.create(common);
person.walk = function (){
    console.log("Walk");
}
let student = Object.create(person)
student.study = function(){
    console.log("Study");
}

console.log(person);
// console.log(animal);
console.log(student);
student.eat()
Object.setPrototypeOf(person,{
    hello(){}
})
console.log(student.hasOwnProperty("study"));
console.log(student.hasOwnProperty("eat"));
console.log(Object.getPrototypeOf(student));
console.log(student.__proto__);
console.log(person.__proto__);



