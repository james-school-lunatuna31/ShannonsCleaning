const dynamicFields = {};

dynamicFields.generateHeader = function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

dynamicFields.generateSlideshow = function () {
    const slides = document.querySelectorAll('#slideshow .slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 4500);
};

document.addEventListener('DOMContentLoaded', function () {
    dynamicFields.generateHeader();
    dynamicFields.generateSlideshow();
});

export default dynamicFields;
