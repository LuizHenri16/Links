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


