const checkBox = document.getElementById('checkbox')
const bodyClass = document.getElementById('body')

checkBox.addEventListener('change', () =>
{
    document.body.classList.toggle('dark')
})