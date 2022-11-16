// ELEMENT TO TRACK MOUSE

// const ball = document.querySelector(".circle-blur");

// let mouseX = 0;
// let mouseY = 0;

// let ballX = 0;
// let ballY = 0;

// let speed = 0.02;


// function animate(){
  
//   let distX = mouseX - ballX;
//   let distY = mouseY - ballY;
  
  
//   ballX = ballX + (distX * speed);
//   ballY = ballY + (distY * speed);
  
//   ball.style.left = ballX + "px";
//   ball.style.top = ballY + "px";
  
//   requestAnimationFrame(animate);
// }
// animate();

// document.addEventListener("mousemove", function(event){
//   mouseX = event.pageX;
//   mouseY = event.pageY;
// })

// APPLY BOUNCE ANIMATION TO HEADER ON SCROLL

const header = document.querySelector('header');

window.addEventListener('scroll', (e)=> {
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

// DATE COUNTER

window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Mar 31, 2021 09:00:00", 'countup1'); // ****** Change this line!
};

function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
        
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
        
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    years = Math.floor(days / 365);
    if (years > 1){ days = days - (years * 365) }
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    document.querySelector('#years').innerHTML = years;
    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#mins').innerHTML = mins;
    document.querySelector('#secs').innerHTML = secs;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}