let slideIndex = 0;

function moveSlide(step) {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    slideIndex += step;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const offset = -slideIndex * slides[0].offsetWidth;
    slider.style.transform = `translateX(${offset}px)`;
}
