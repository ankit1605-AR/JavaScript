let user1 = {
    name: "Rahul",
    age: 20,
    // printName(){
    //     console.log(`Hii, I am ${this.name}`);
    //     // console.log("name",this.name);
    // }
}

let user2 = {
    name: "Ankit",
    age: 20,
    // printName(){
    //     console.log(`Hii, I am ${this.name}`);
    // }
}

function printName(country , state) {
    console.log(this);
    console.log(`Hii, I am ${this.name} , Form ${country} , ${state}`);
}
// printName.call(user1) // user1 -> this
// printName.call(user1,"India","Delhi") // user1 -> this


// user1.printName()
// user2.printName()

// user1.printName.call(user2)


printName.apply(user1)
printName.apply(user1,["India","Delhi"])  // array me argument dete hai


let newFun = printName.bind(user1,"India","Delhi");
console.log(newFun);

newFun()

