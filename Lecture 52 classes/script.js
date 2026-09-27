

// function Product(name , price){
//     console.log(this); // function ka this hota hai isme
// }

// Product()

const random =()=>{
    console.log(this); // apne parent ka this hota hai
}
// random()

// const user={
//     name : "ankit",
// }
// user.phone = "8796463566";
// console.log(user);



// function Product(name , price){
//     this.name = name;
//     this.price = price;
//     // console.log(this);
//     // return this;
// }
// let p1=new Product("Iphone",45986);
// // console.log(p1.name);
// let p2=new Product("Samsung",69000);
// console.log(p1.name);
// console.log(p2.name);


function Product(name , price){
    this.name = name;
    this.price = price;
    // console.log(this);
    return "hello";
}
let p1=new Product("Iphone",45986);
let p2=new Product("Samsung",69000);
// console.log(p1.name);
// console.log(p2.name);
// console.log(p1,p2);

// console.log(`${p1}${p2}`); // [object Object]



// class User{
//     constructor(){ //constructor keyword hai
//         // console.log("hello");
//         this.name = "ankit"; // instance property
//     }
// }

// // const u1 =  User() // ERROR 
// const u1 = new User()
// console.log(u1);



class User{
    age = 19; // default property
    country = "india"; // default property
    constructor(name , country){ 
        this.name = name; // instance property
        this.country = country; // instance property
    }
    printName(){ // instance Method
        console.log(this.name);
    }
}

// const u1 =  User() // ERROR 
const u1 = new User("Ankit","India")
const u2 = new User("Rahul","India")
// console.log(u1,u2);

// u1.printName()
// u2.printName()
// console.log(u1.name);

// u1.name = "Name Update";
// u1.printName()


class BankAccount{
    #balance; // this is private property
    static totalBankAccount = 0;
    constructor(initialBalance){
        this.#balance = initialBalance;
        BankAccount.totalBankAccount++;
    }
    get(){ // method
        console.log(this.#balance);
    }
    withdraw(amount){ // method
        if(amount > this.#balance){
            console.log("Not sufficient amount");
            return;
        }
        this.#balance = this.#balance - amount;
    }
    deposit(amount){ // method
        if(amount < 0){
            console.log("wrong input....");
            return
        }
        this.#balance = this.#balance + amount;
    }
    static calculateTax(){ // static method
        console.log("Calculate tax...");
    }
}


let acc1 = new BankAccount(500);
let acc2 = new BankAccount(500);
let acc3 = new BankAccount(500);
let acc4 = new BankAccount(500);


// acc1.get()
// acc1.withdraw(11000)
// acc1.get()

// acc1.deposit(458663)
// acc1.get()


// acc1.balance = 10000; // this is not work
acc1.deposit(-11);
acc1.get()
// acc1.calculateTax() // acc1.calculateTAx is not a function

BankAccount.calculateTax()
console.log(BankAccount.totalBankAccount);



