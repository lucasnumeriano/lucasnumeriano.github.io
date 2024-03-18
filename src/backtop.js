const buttonBackTop = document.querySelector('.button-back-top')

window.addEventListener('scroll', () => {
    if (scrollY > 300) {
        buttonBackTop.classList.add('active')
    } else {
        buttonBackTop.classList.remove('active')
    }
})