
let body = document.querySelector("body");

let colorStr = "0123456789abcdef";
// let randomValue = Math.floor(Math.random()*colorStr.length) +1;

setInterval(() => {
    let color = "";
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * colorStr.length);
        color = color + colorStr[randomValue]
    }
    body.style.backgroundColor = `#${color}`
}, 1000)


