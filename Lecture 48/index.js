

// // let storage = localStorage.setItem("num" , 2) // set the item local storage

// let result = localStorage.getItem("num") // all stored string

// console.log(result);

// // let result2 = localStorage.key(0) // key index re-present
// let result2 = localStorage.key("0") // key index re-present
// console.log(result2);

// localStorage.removeItem("num")


// localStorage.setItem("num1" , 1) 
// localStorage.setItem("num2" , 2) 
// localStorage.setItem("num3" , 3) 
// localStorage.setItem("num4" , 4) 
// localStorage.clear()


// localStorage.setItem("num1", 1)
// localStorage.setItem("num2", 2)
// localStorage.setItem("num3", 3)
// localStorage.setItem("num4", 4)
// document.querySelector("#clear-local-storage").addEventListener('click', () => {
//     localStorage.clear()
// })


// document.querySelector("#add-session-item").addEventListener('click', () => {
//     sessionStorage.setItem("session", "item")

// })

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     let data = xhttp.responseText;
//     console.log(data);
// }
// xhttp.open("GET","https://api.github.com/users/nishantsaini2331",true);
// xhttp.send();


fetch("https://api.github.com/users/nishantsaini2331")
.then(data => data.json())
.then(data => console.log(data))

// fetch -> promise deta hai

async function getUser(username = "nishantsaini2331") {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()

    console.log(data);
}

getUser()