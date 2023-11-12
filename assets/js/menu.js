const buttonMn = document.querySelector('.button-menu')
const mobileMn = document.querySelector('.mobile-menu')

const linkMenu1 = document.querySelector('.link-1')
const linkMenu2 = document.querySelector('.link-2') 
const linkMenu3 = document.querySelector('.link-3')
const linkMenu4 = document.querySelector('.link-4')

const menu = document.querySelector('#navbar')

buttonMn.addEventListener('click', () => {
    if(mobileMn.classList.contains('open')){
        mobileMn.classList.remove('open')
    } else {
        mobileMn.classList.add('open')
    }
})

linkMenu1.addEventListener('click', () => {
    mobileMn.classList.remove('open')
})

linkMenu2.addEventListener('click', () => {
    mobileMn.classList.remove('open')
})

linkMenu3.addEventListener('click', () => {
    mobileMn.classList.remove('open')
})

linkMenu4.addEventListener('click', () => {
    mobileMn.classList.remove('open')
})

window.addEventListener('scroll', () => {
    if (scrollY > 10) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
})