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
        marks:30,
    },
    {
        name:"shivan",
        marks:32,
    },
    {
        name:"piyush",
        marks:29,
    }

]
// let failedStudents =[];
// students.forEach((student)=>{
//     if(student.marks<33){
//         failedStudents.push(student)
//     }
// })

// const failedStudents =students.filter(student => student.marks<33)
// console.log(failedStudents);

// chaining CHAINING

const failedStudents =students.filter(student => student.marks<33).map((student) => student.name)
console.log(failedStudents);
