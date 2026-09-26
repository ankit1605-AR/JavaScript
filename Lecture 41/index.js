const form = document.querySelector("#form")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkBox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")


const LIMIT = 200
charCount.textContent = `${LIMIT} Characters remaining`;

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    // const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    // const password = document.querySelector("#password").value

    // console.log({name , password , email});
    // console.log({username: username.value , password: password.value , email});

})

// username.addEventListener("input",(e)=>{
//     console.log(username.value);

// })

bio.addEventListener("input",(e)=>{
    // console.log(bio.value);
    // console.log(bio.value.length);

    const remaining = LIMIT - bio.value.length;

    charCount.textContent = `${remaining} Characters remaining`;
    // console.log(remaining);
})

username.addEventListener("change",(e)=>{
    console.log("change event ",username.value);

})
username.addEventListener("input",(e)=>{
    console.log("input event",username.value);
})

checkBox.addEventListener("input",(e)=>{
    console.log(checkBox.checked);
})

country.addEventListener("input",(e)=>{
    console.log(country.value);
})

username.addEventListener("focus",(e)=>{
    console.log("focus");
})

username.addEventListener("blur",(e)=>{
    console.log("blur");
})

password.addEventListener("focus",(e)=>{
    passwordHint.classList.remove("hidden")
})

password.addEventListener("blur",(e)=>{
    passwordHint.classList.add("hidden")
})


