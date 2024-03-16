
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = slider.offsetWidth;
let currentSlide = 0;
const dotsContainer = document.querySelector('.dots');
const slidesLength = slides.childElementCount;

function goToSlide(index) {
    slides.style.transform = `translateX(-${slideWidth * index}px)`;
    currentSlide = index;
    updateDots();
}

function nextSlide() {
    if (currentSlide === slidesLength - 1) {
        goToSlide(0);
    } else {
        goToSlide(currentSlide + 1);
    }
}

function createDots() {
    for (let i = 0; i < slidesLength; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', function () {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        if (i === currentSlide) {
            dots[i].classList.add('active');
        } else {
            dots[i].classList.remove('active');
        }
    }
}

createDots();
updateDots();
setInterval(nextSlide, 4000);
