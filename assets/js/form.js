const submit = document.querySelector('#submit')


submit.addEventListener('click', function (eventObj) {
    eventObj.preventDefault()

    let usernameInput = document.getElementById("username").value
    let titleInput = document.getElementById("title").value
    let contentInput = document.getElementById("content").value

    console.log(usernameInput)

    localStorage.setItem('username', usernameInput)
    localStorage.setItem('title', titleInput)
    localStorage.setItem('content', contentInput)
})

