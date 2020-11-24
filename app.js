const iPhone = document.querySelector('.iPhone');
const container = document.querySelector('.container');
const dunkinLogo = document.querySelector('.dunkinLogo');
const donuts = document.querySelector('.donuts');
const content = document.querySelector('.content h3');

// Mouse move over
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    iPhone.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


// mouse enter
container.addEventListener('mouseenter', e => {
    iPhone.style.transition = 'none';
    dunkinLogo.style.transform = 'translateZ(100px) rotateZ(-45deg)';
    donuts.style.transform = 'translateZ(100px)';
    content.style.transform = 'translateZ(100px)';
});

// mouse leave
container.addEventListener('mouseleave', e => {
    iPhone.style.transition = "all 0.5s ease";
    iPhone.style.transform = `rotateY(0deg) rotateX(0deg)`;
    dunkinLogo.style.transform = 'translateZ(0px) rotateZ(0deg)';
    donuts.style.transform = 'translateZ(0px)';
    content.style.transform = 'translateZ(0px)';
});