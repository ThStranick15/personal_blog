const checkBox = document.querySelector("#checkbox")
const body = document.querySelector("body")
const navA = document.querySelector("nav > a")
const footA = document.querySelector("footer > a")
const blogPost = document.querySelectorAll("article")
const formArea = document.querySelectorAll("section.area")

function setColorScheme(e){
    if(checkBox.checked){
        body.style.backgroundColor = "#333"
        body.style.color = "white"
        navA.style.backgroundColor = "#0d375a"
        footA.style.color = "white"
        for(let i of blogPost){
            i.style.backgroundColor = "#0d375a"
        }
        for(let i of formArea){
            i.style.backgroundColor = "#0d375a"
        }
    }
    else{
        body.style.backgroundColor = "white"
        body.style.color = "#333"
        navA.style.backgroundColor = "#8caaff"
        footA.style.color = "black"
        for(let i of blogPost){
            i.style.backgroundColor = "#8caaff"
        } 
        for(let i of formArea){
            i.style.backgroundColor = "#8caaff"
        }
    }
}

function switchColorScheme(){
    localStorage.setItem('c', checkBox.checked)
    setColorScheme()
}

function init() {
    // Create a submit event listener for form
    const mode = localStorage.getItem('c')
    checkBox.checked = (mode === 'true' && true) || false
    setColorScheme()
    // console.log(localStorage.getItem('c'))
    checkBox.addEventListener('click', switchColorScheme)
    
}

init()