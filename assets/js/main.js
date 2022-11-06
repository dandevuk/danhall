// APPLY BOUNCE ANIMATION TO HEADER ON SCROLL

const header = document.querySelector('header');

window.addEventListener('scroll', (e)=> {
    console.log("SCROLL")
    header.classList.add('bounce');
    setTimeout(()=>{
        header.classList.remove('bounce');
    }, 1000)
});

// OPEN MENU FUNCTIONALITY

const menu_burger = document.querySelector('.menu svg');
const menu_burger_rects = document.querySelectorAll('.menu svg rect');

console.log('Rects', menu_burger_rects)

menu_burger.addEventListener('click', ()=> {
    if (menu_burger.classList.contains('close')) {
        menu_burger.classList.remove('close');
    } else {
        menu_burger.classList.add('close');
    }

    if (header.classList.contains('menu-open')) {
        header.classList.remove('menu-open');
    } else {
        header.classList.add('menu-open');
    }
})