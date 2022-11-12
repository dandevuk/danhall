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

// MOVE CONTENT IN FROM LEFT WHEN IN VIEW

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
});

const content_elements = document.querySelectorAll('.content');
content_elements.forEach((element) => observer.observe(element));

// CHANGE DATA LINK TITLE

const links = document.querySelectorAll('.social-links a');

const link_title = document.querySelector('.link-title');

links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        let title = link.getAttribute('data-link');
        link_title.innerHTML = title;

        link_title.classList.add('slide-skew-in');
        setTimeout(() =>{
            link_title.classList.remove('slide-skew-in');
        }, 400);
    });
    link.addEventListener('mouseout', () => {
        link_title.innerHTML = '';
    });
})