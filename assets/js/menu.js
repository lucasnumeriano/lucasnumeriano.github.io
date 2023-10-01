const buttonMn = document.querySelector('.button-menu')
const mobileMn = document.querySelector('.mobile-menu')

buttonMn.addEventListener('click', () => {
    if(mobileMn.classList.contains('open')){
        mobileMn.classList.remove('open')
    } else {
        mobileMn.classList.add('open')
    }
})