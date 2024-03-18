const buttonSeeAll = document.querySelector('.button-see-all');
const buttonSeeLess = document.querySelector('.button-see-less');
const listContainers = document.querySelectorAll('.container');

const seeAll = document.querySelector('.see-all')
const seeLess = document.querySelector('.see-less')

buttonSeeAll.addEventListener('click', () => {
    listContainers.forEach(container => {
        if (container.classList.contains('visible') && container.classList.contains('pop-up')) {
            container.classList.add('invisible')
            container.classList.remove('visible');
            seeAll.classList.remove('invisible');
            seeLess.classList.remove('visible');
            
        } else {
            container.classList.remove('invisible');
            container.classList.add('visible');
            seeAll.classList.add('invisible');
            seeLess.classList.add('visible');
        }
    });
});