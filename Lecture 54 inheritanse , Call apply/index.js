
// class User{
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }
//     login(){console.log("login");}
//     logout(){console.log("logout");}
// }
// class Customer extends User {
//     // constructor(name,email){
//     //     this.name = name
//     //     this.email = email
//     // }

//     buyProduct(){console.log("buyProduct");}
//     addToCart(){console.log("addToCart");}
//     // login(){}
//     // logout(){}
// }
// class Seller extends User {
//     // constructor(name,email){
//     //     this.name = name
//     //     this.email = email
//     // }
//     addProduct(){console.log("addProduct");}
//     // login(){}
//     // logout(){}
// }

// class Admin extends User {
//     // constructor(name,email){
//     //     this.name = name
//     //     this.email = email
//     // }
//     hideProduct(){console.log("hideProduct");}
//     // login(){}
//     // logout(){}
// }

// let c1 = new Customer("Ankit","ankit21233")
// let c2 = new Seller("Ankit","ankit21233")
// let c3 = new Admin("Ankit","ankit21233")
// console.log(c1);
// console.log(c3);
// console.log(c1);
// c1.buyProduct()




class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    login(){console.log("login");}
    logout(){console.log("logout");}
}
class Customer extends User {
    cart = [] 
    constructor(name,email,password){
        super(name,email) // User (parents) constructor ko call karega
        this.password = password
        // this.name = name
        // this.email = email
    }

    buyProduct(){console.log("buyProduct");}
    addToCart(item){console.log(this.cart.push(item));}
    showProduct(){console.log(this.cart);}
    // login(){}
    // logout(){}
}
class Seller extends User {
    // constructor(name,email){
    //     this.name = name
    //     this.email = email
    // }
    addProduct(){console.log("addProduct");}
    // login(){}
    // logout(){}
}

class Admin extends User {
    // constructor(name,email){
    //     this.name = name
    //     this.email = email
    // }
    hideProduct(){console.log("hideProduct");}
    // login(){}
    // logout(){}
}

let c1 = new Customer("Ankit","ankit21233","1235456")

console.log(c1);
c1.addToCart("Phone");
c1.showProduct()

class PremiumCustomer extends Customer{
    constructor(name,email,pass){
        super(name,email,pass)
    }
}

const c5 = new PremiumCustomer("ankit","ankit@45")
console.log(c5);