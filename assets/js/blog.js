const postsHTML = document.querySelector('.feed')

const rawPosts = localStorage.getItem('posts')
const postsOutput = JSON.parse(rawPosts)

function addPost(){
     if(postsOutput.length){
        postsHTML.innerHTML = ''
     }

     for(let i of postsOutput){
        postsHTML.insertAdjacentHTML("beforeend",`
        <article class="column">
            <p>${i.title}</p>
            <p>${i.content} - ${i.username}</p>
        </article>
        `)
     }
}

addPost()