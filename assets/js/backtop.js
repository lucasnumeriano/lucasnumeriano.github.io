const btGoTop = document.querySelector('.bt-go-top')

window.addEventListener('scroll', () => {
    if (scrollY > 300) {
        btGoTop.classList.add('active')
    } else {
        btGoTop.classList.remove('active')
    }
})