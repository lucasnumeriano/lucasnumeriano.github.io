const crobat = document.querySelector('.crobat')
const guinchoMorcego = new Audio('assets/sounds/guincho-morcego.mp3')

crobat.addEventListener('click', () => {
    guinchoMorcego.play()
})