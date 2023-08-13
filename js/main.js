let menu = document.getElementById('menu')
let links = document.querySelector('.links')
let width = screen.width;
menu.addEventListener('click', () => {
    if (links.classList.contains('display')) {
        links.classList.remove('display')
        links.style.display = 'block'
    } else {
        links.classList.add('display')
        links.style.display = 'none'
    }

})