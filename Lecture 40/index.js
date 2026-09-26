// let div = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift");
// let btn = document.querySelector("#btn");

// // btn.addEventListener("click" , function (){
// //     console.log("Hello, this is work");
// // })

// // btn.addEventListener("click" ,  () => {
// //     console.log("Hello, this is work");
// // })


// // function revealGift(){
// //     // console.log("Iphone 100 max pro");

// //     h1.classList.remove("hidden")

// //     // h1.classList.toggle("hidden")
// //     // h1.classList.add("visible")
// // }

// // btn.addEventListener('click',revealGift);

// // event object

// function revealGift(event){
//     // console.log(event);
//     console.log(event.type);
//     console.log("target",event.target);
//     console.log("currentTarget",event.currentTarget);
    
// }
// div.addEventListener('click',revealGift);


// // btn.addEventListener('click',(e) =>{
// //     console.log(e);
// //     console.log(e.key); // jab key wale event lagyege tab work jaise 'keydown'

// //     console.log(e.clientX);
// //     console.log(e.clientY);

// // })



// function fun1(e){
//     console.log(e);
// }

// btn.addEventListener('click',fun1,{once : true});
// // btn.removeEventListener('click',fun1);


// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")

// // outter.addEventListener('click',(e) =>{
// //     console.log("outter");
// // },{capture : true})

// // inner.addEventListener('click',(e) =>{
// //     console.log("inner");
// // })

// // btn2.addEventListener('click',(e) =>{
// //     console.log("btn2");
// // })

// let body=document.querySelector("body");
// body.addEventListener('click',()=>{
//     // e.stopPropagation()
//     console.log("body");
// })
// outter.addEventListener('click',(e) =>{
//     e.stopPropagation()
//     console.log("outter");
// })

// inner.addEventListener('click',(e) =>{
//     e.stopPropagation()
//     console.log("inner");
// })

// btn2.addEventListener('click',(e) =>{
//     e.stopPropagation()
//     console.log("btn2");
// })


//////// EVENT DELIGETION


// let product=[
//     {
//         name:" iphone",
//         price:99999,
//         imgUrl :"https://m.media-amazon.com/images/I/716cxn2E1ZL._SX679_.jpg"
//     },
//     {
//         name:"Nokia",
//         price:9299,
//         imgUrl :"https://m.media-amazon.com/images/I/710PTfW5WQL._SL1500_.jpg"
//     },
//     {
//         name:"Vivo",
//         price:45698,
//         imgUrl :"https://m.media-amazon.com/images/I/51Ux-cO+2+L._SL1500_.jpg"
//     },
// ]

// let productList = document.querySelector("#product-list")

// product.forEach((product) => {
//     const card = document.createElement("div");
//     card.classList.add("singleProduct");

//     const dltBtn = document.createElement("button");
//     dltBtn.textContent = "Remove product";

//     const addTOcard = document.createElement("button");
//     addTOcard.textContent = "Add TO Product";

//     // dltBtn.addEventListener('click',(e)=>{
//     //     card.remove();
//     // })

//     card.innerHTML = `<div> 
//         <img src=${product.imgUrl} alt=""> 
//     </div>
//     <div class="productDetail">
//         <p>${product.name}</p>
//         <p>${product.price}</p>
//     </div>
//     `
//     card.append(dltBtn);
//     card.append(addTOcard);
//     productList.append(card);
// });

// productList.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log(e.target.parentElement);
//     console.log(e.target.tagName);
//     // if(e.target.tagName === "BUTTON"){
//     //     e.target.parentElement.remove();
//     // }
//     console.log(e.target.textContent);
//     if(e.target.textContent === "Remove product" && e.target.tagName === "BUTTON"){
//         e.target.parentElement.remove();
//     }
// })


let product=[
    {   
        id:"1",
        name:" iphone",
        price:99999,
        imgUrl :"https://m.media-amazon.com/images/I/716cxn2E1ZL._SX679_.jpg"
    },
    {
        id:"2",
        name:"Nokia",
        price:9299,
        imgUrl :"https://m.media-amazon.com/images/I/710PTfW5WQL._SL1500_.jpg"
    },
    {
        id:"3",
        name:"Vivo",
        price:45698,
        imgUrl :"https://m.media-amazon.com/images/I/51Ux-cO+2+L._SL1500_.jpg"
    },
]

let productList = document.querySelector("#product-list")

product.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    card.dataset.productId = product.id;

    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Remove product";

    const addTOcard = document.createElement("button");
    addTOcard.textContent = "Add TO Product";

    // dltBtn.addEventListener('click',(e)=>{
    //     card.remove();
    // })

    card.innerHTML = `<div> 
        <img src=${product.imgUrl} alt=""> 
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>
    `
    card.append(dltBtn);
    card.append(addTOcard);
    productList.append(card);
});

productList.addEventListener('click',(e)=>{
    e.stopPropagation();
    // console.log(e.target.parentElement);
    // console.log(e.target.tagName);
    
    // console.log(e.target.parentElement.dataset.productId);
    // console.log(e.target.textContent);
    if(e.target.textContent === "Remove product" && e.target.tagName === "BUTTON"){
        // e.target.parentElement.remove();
        e.target.closest(".singleProduct").remove();
    }

    // console.log(e.target.closest(".singleProduct"));
})













