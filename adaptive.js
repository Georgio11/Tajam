
const video = document.querySelector('video');
const playBtn = document.querySelector('.triangle_play');
const playBlock = document.querySelector('.play');
const section = document.querySelector('.section_2');

playBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        video.controls = true;
        playBlock.classList.add('--disabled');
        section.style.width = '70%';
        section.style.margin = '0 auto';
        section.style.padding = '40px 0 40px 0';
        playBlock.classList.add('video_active')
        console.log('play');
    } else {
        video.pause();
        console.log('pause');
    }
 });

 video.addEventListener('click', function() {
    if (video.played) {
        video.pause();
        
        playBlock.classList.remove('--disabled');
        video.controls = false;
    } else {
        video.play();
        video.controls = true;
    };
});

const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length) {
    menuLinks.forEach(menu => {
        menu.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        console.log('first 6 links')
        const menuLink = e.target;
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        if (menuIcon.classList.contains('--active')) {
            menuIcon.classList.remove('--active');
            menuBody.classList.remove('--active');
            document.body.classList.remove('--lock');
        };

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
        
    }
};

let maxHeight = Math.max (
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
)

console.log(maxHeight)

const lastLink = document.querySelector('.menu_link_contact');
const logoLinkContact = document.querySelector('.footer_logo');
const logoLink = document.querySelector('.logo');
const linkHiring = document.querySelector('.button_2');

const ArrUp = [logoLink, logoLinkContact];
ArrUp.forEach(up => {
    up.addEventListener('click', function(e) {
        console.log('up');

        window.scrollTo({
            top: 0,
            behavior: "smooth"
    });
    e.preventDefault();
    });
});

const ArrDown = [linkHiring, lastLink];
ArrDown.forEach(down => {
    down.addEventListener('click', function(e) {
        console.log('down');

        if (menuIcon.classList.contains('--active')) {
            menuIcon.classList.remove('--active');
            menuBody.classList.remove('--active');
            document.body.classList.remove('--lock');
        };

        window.scrollTo({
            top: maxHeight,
            behavior: "smooth"
    });
    e.preventDefault();
    });
});

const works = document.querySelector('.works_for_js');
const buttonWorks = document.querySelector('.section_5 .button');
const workMargin = document.querySelector('.works_for_margin');
const workMargin0 = document.querySelector('.works_for_margin_0');

buttonWorks.addEventListener('click', function() {
    if (document.querySelector('.works_for_js')) {
        works.classList.remove('works_for_js');
        works.classList.add('work_active');
        workMargin.classList.add('margin_0');
        workMargin0.classList.add('margin_0');
        buttonWorks.innerHTML = 'HIDE';
        console.log('more works');
    } else {
        works.classList.add('works_for_js');
        works.classList.remove('work_active');
        workMargin.classList.remove('margin_0');
        workMargin0.classList.remove('margin_0');
        buttonWorks.innerHTML = 'load more';
        console.log('less works');
    }
});

document.querySelectorAll('a.yakor').forEach(yakor => {
    yakor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
    
        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});


const images = document.querySelectorAll('.slider_content');
const sliderLine = document.querySelector('.slider_line');
let count = 0;
let countCircle = 0;
let width;

document.addEventListener('DOMContentLoaded', function() {
    sliderLine.style.width = 100 * images.length + '%';
});

// window.onload = init, commInit;

const circles = document.querySelectorAll('.circle');

const navigationLeft = document.querySelector('.--left');

//Навигация влево

navigationLeft.addEventListener('click', function() {
    count --;
    if (count < 0) {
        count = images.length -1;
    }

    rollSlider();
    rollCircles(count);
});

const navigationRight = document.querySelector('.--right');

//Навигация вправо

navigationRight.addEventListener('click', function() {
    count ++;
    countCircle++;

    if (count >= images.length) {
        count = 0;
    };

    rollSlider();
    rollCircles(count);
});

//функция передвижения слайдеров

function rollSlider() {
    sliderLine.style.transform = 'translate(-'+  count * 100 /images.length + '%)';
};

function rollCircles(count) {
    circles.forEach((value, index) => {
      if (index === count) {
        value.classList.add('--active');
      } else {
        value.classList.remove('--active');
      }
    });
};

function rollCommSlider() {
    commSliderLine.style.transform = 'translate(-'+  count * 100 /navigList.length + '%)';
};

document.addEventListener('DOMContentLoaded', function() {
    commSliderLine.style.width = 100 * navigList.length + '%';
});


const navigList = document.querySelectorAll('.navig');
const commLeft = document.querySelector('.--left_foo');
const commRight = document.querySelector('.--right_foo');
const commSliderLine = document.querySelector('.comm_slider_line');

commLeft.addEventListener('click', function() {
    count --;
    if (count < 0) {
       count = navigList.length -1;
     }

    rollCommSlider()
    rollCommCircles(count)
});

commRight.addEventListener('click', function() {
    count++;
    if (count >= navigList.length) {
        count = 0;
    };

    rollCommSlider()
    rollCommCircles(count)
});

function rollCommCircles(count) {
    navigList.forEach((value, index) => {
      if (index === count) {
        value.classList.add('--active');
      } else {
        value.classList.remove('--active');
      }
    });
};

const menuIcon = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu');

menuIcon.addEventListener('click', function(e) {
    menuIcon.classList.toggle('--active');
    menuBody.classList.toggle('--active');
    document.body.classList.toggle('--lock');
});

const yOffset = document.querySelector('body').offsetWidth;
console.log(yOffset);


