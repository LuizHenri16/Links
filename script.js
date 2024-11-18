const checkBox = document.getElementById('checkbox')
const bodyClass = document.getElementById('body')

window.addEventListener("load", () => {
    let message = "Se você entrou aqui, poderia me responder o que você está fazendo aqui? > 71984771099"
    console.log(message)
})

checkBox.addEventListener('change', () =>
{
    document.body.classList.toggle('dark')
})

let iconLinks = {
    github: "https://github.com/LuizHenri16",
    instagram: "https://www.instagram.com/_._luizhenrique/",
    linkedin: "https://www.linkedin.com/in/luiz-bastos-395922213/"
}

let projectLinks = {
    1: "https://react-app-study-4f1s7no5a-luizhenri16.vercel.app/", 
    2: "https://great-code-rosy.vercel.app/",
    3: "https://responsive-teste.vercel.app/",
    4: "https://login-app-theta.vercel.app/"
}

function gitHub() {
    window.open(iconLinks.github)
}

function instagram() {
    window.open(iconLinks.instagram)
}

function linkedin() {
    window.open(iconLinks.linkedin)
}

function projectLink1() {
    window.open(projectLinks[1])
}

function projectLink2() {
    window.open(projectLinks[2])
}

function projectLink3() {
    window.open(projectLinks[3])
}

function projectLink4() {
    window.open(projectLinks[4])
}
