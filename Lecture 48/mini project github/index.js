
async function getUser(username = "nishantsaini2331") {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()

    return data;
}

document.querySelector("#github-form").addEventListener('submit', async (e) => {
    e.preventDefault()
    let username = document.querySelector("#github-username").value

    const data = await getUser(username)

    document.querySelector("#show-profile").innerHTML = `<img src=${data.avatar_url} alt="">
        <h2>${data.name}</h2>
        <i>username : ${data.login}</i>
        <p>bio : ${data.bio}</p>
        <p>followers : ${data.followers}</p>
        <p>following : ${data.following}</p>
        <p>Public repos : ${data.public_repos}</p>`
})


function updateStatus() {
    document.querySelector("#show-status").textContent = navigator.onLine ? "Online" : "Offline"
}
window.addEventListener("online" , updateStatus)
window.addEventListener("offline" , updateStatus)