let originalPrice=[499,599,659,449];
let discountedPrice=[];
// for(value of originalPrice){
//     discountedPrice.push(value *0.9)// 10% discount
// }
// console.log(originalPrice);
// console.log(discountedPrice);

// const discountedPrice2 = originalPrice.map((value)=>{
//     return value*0.9;
// })
const discountedPrice2 = originalPrice.map((value)=> value*0.9)
originalPrice.forEach((value)=>{
    discountedPrice.push(value*0.9);
})
// console.log(discountedPrice2);
// console.log(discountedPrice);

let students=[
    {
        name:"ankit",
        marks:99,
    },
    {
        name:"Rahul",
        marks:90,
    },
    {
        name:"nidhi",
        marks:91,
    },
    {
        name:"shivam",
        marks:10,
    }

]

// let studentNames=[];
// students.forEach((value)=>{
//     studentNames.push(value.name)
// })
// console.log(studentNames);

// const studentNames = students.map((student)=>student.name)
// const studentMarks = students.map((student)=>student.marks)

// console.log(studentNames,studentMarks);
// const boostedMarks = students.map((student)=>{
//     return {...student,marks:student.marks+10}
// })

// const boostedMarks = students.map((student)=> ({...student,marks:student.marks+10}))
const boostedMarks = students.map(student=> ({...student,marks:student.marks+10}))
console.log(boostedMarks);

