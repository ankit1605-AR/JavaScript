// "use strict"

// let h1 = document.getElementById("h1");
// let h1 = document.querySelector("h1");
// let h1 = document.querySelector(".h1"); //class ke liye

// let h1 = document.querySelector("#h1"); // id ke liye

// let h1 = document.querySelectorAll("h1");

// console.log(h1);

// let p =document.querySelector("p");
// let a =document.querySelector("p");

// p.textContent="Hello sabhi kaise ho";

// p.innerHTML= "<h2>Hello destoooo</h2>" // very very risky

/*console.log(p.textContent);
console.log(p.innerHTML);
console.log(p.innerText); // css work */

// Attribut

// p.setAttribute("style" , "background-color: pink")

// let btn = document.querySelector("#btn")
// btn.setAttribute("disabled" ,"true")
// btn.textContent ="Remove"

// let res = p.getAttribute("disabled")
// let res = btn.getAttribute("disabled")
// console.log(res);

// p.removeAttribute("style")

// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random") // add ho to remove karta hai or remove ho to add

// console.log(p.classList.contains("random"));

// p.style.backgroundColor="red"  // camel case

// p.dataset.helloDosto ="hii";
// console.log(p.dataset.helloDosto);




// let div = document.createElement("div")

// div.textContent="Hello"
// // console.log(div);

let body = document.querySelector("body");

// // body.appendChild(div) // single node ke liye

// // body.append(div) // multiple ke liye (array)


// // append -> insert in last of body
// // prepend -> insert in start of body

// body.prepend(div)




// let product=[
//     {
//         name:" iphone",
//         price:99999
//     },
//     {
//         name:"Nokia",
//         price:9299
//     },
//     {
//         name:"Vivo",
//         price:45698
//     },
// ]

// let productList = document.querySelector("#product-list")

// product.forEach((product) => {
//     const card = document.createElement("p");
//     card.textContent = `Product =  ${product.name} - Price =  ${product.price}`;
//     productList.append(card); 
// });


let product=[
    {
        name:" iphone",
        price:99999,
        imgUrl :"https://m.media-amazon.com/images/I/716cxn2E1ZL._SX679_.jpg"
    },
    {
        name:"Nokia",
        price:9299,
        imgUrl :"https://m.media-amazon.com/images/I/710PTfW5WQL._SL1500_.jpg"
    },
    {
        name:"Vivo",
        price:45698,
        imgUrl :"https://m.media-amazon.com/images/I/51Ux-cO+2+L._SL1500_.jpg"
    },
]

let productList = document.querySelector("#product-list")

product.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct")

    card.innerHTML = `<div> 
        <img src=${product.imgUrl} alt=""> 
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div> `
    productList.append(card);
});

let h2 = document.querySelector("h2")

// body.removeChild(h2) // you have to perform on parent

// h2.remove()// directly on the element you want to remove


// let clone = productList.cloneNode(true);

// console.log(clone);

// body.append(clone)


// insert

const items = productList.children;

// productList.insertBefore(h2 , items[2]) // for precise positioning

items[2].before(h2)
items[2].after(h2)

