const submit = document.querySelector('#submit')

submit.addEventListener('click', function (eventObj) {
    eventObj.preventDefault()

    let usernameInput = document.getElementById("username").value
    let titleInput = document.getElementById("title").value
    let contentInput = document.getElementById("content").value

    post = {
        username: usernameInput,
        title: titleInput,
        content: contentInput
    }

    const posts = JSON.parse(localStorage.getItem('posts')) || []
    
    posts.push(post)
    
    localStorage.setItem('posts', JSON.stringify(posts))

    window.location = 'blog.html'
})

