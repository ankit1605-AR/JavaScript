let marks =[56,24,65,98,32];
// let totalMarks =0;
// marks.forEach((mark) => totalMarks=totalMarks+mark )
// console.log(totalMarks);


const totalMarks = marks.reduce((accumulator,currentValue) =>{
    // accumulator = accumulator + currentValue;
    // return accumulator;
    return accumulator+currentValue;
},0)
// console.log(totalMarks);


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
const totalMarks1 =students.reduce((totalMarks1,student)=>totalMarks1+student.marks,0)
// console.log(totalMarks1);

const attendence=["present","present","absent","present","absent"]

// -> { present =3, absent =2}
// let obj ={};
// attendence.forEach((value)=>{
//     if(obj[value]){
//         obj[value]=obj[value]+1;
//     }else{
//         obj[value]=1;
//     }
// })
// console.log(obj);


const obj =attendence.reduce((acc,value)=>{

    // if(acc[value]){
    //    acc[value]=acc[value]+1;
    // }else{
    //     acc[value]=1;
    // }

    acc[value]=(acc[value] || 0)+1;
    return acc;
},{})

console.log(obj);
