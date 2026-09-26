const form = document.querySelector("#form")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkBox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")
// const errorMsg = document.querySelector("#error-msg")


const LIMIT = 200
charCount.textContent = `${LIMIT} Characters remaining`;

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     if(username.value.trim().length ===0){
//         console.log("Enter your name");
//         // alert("Please enter your name")
//         errorMsg.textContent="Please enter your name"
//         return;
//     }

//     const email = document.querySelector("#email").value

//     console.log({username: username.value , password: password.value , email});

// })

function showError(input , errorMessage){
    input.parentElement.querySelector(".error-msg").textContent = errorMessage;
}
function clearError(input){
    input.parentElement.querySelector(".error-msg").textContent = "";
}

function validUsername(username){
        console.log(username.parentElement.querySelector(".error-msg"));
    if(username.value.trim().length === 0){
        // errorMsg.textContent="Enter your name";
        showError(username, "Please Enter your name");
        return false;
    }
    if(username.value.trim().length < 3){
        showError(username, "Password must be at least 3 character");
        return false;
    }
    clearError(username);
    return true;
}

function validPassword(password){
    console.log(password.parentElement.querySelector(".error-msg"));
    if(password.value.trim().length === 0){
        showError(password, "Please Enter your password");
        return false;
    }
    if(password.value.trim().length < 8){
        showError(password, "Username must be at least 8 character");
        return false;
    }
    clearError(password);
    return true;
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
   const isUsernameValid = validUsername(username);
   const isPasswordValid = validPassword(password);
   
   if(isUsernameValid){
    console.log("Form is valid");
   }
  
})
