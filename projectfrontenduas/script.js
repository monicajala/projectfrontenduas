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

// Function to open the review popup
function openReviewPopup() {
    document.getElementById("reviewPopup").style.display = "flex";
}

// Function to close the review popup
function closeReviewPopup() {
    document.getElementById("reviewPopup").style.display = "none";
}

// Function to handle review submission
function submitReview() {
    const reviewMessage = document.getElementById("reviewMessage").value;
    const photoUpload = document.getElementById("photoUpload").files;

    if (!reviewMessage.trim()) {
        alert("Please write a review before submitting.");
        return;
    }

    alert(`Review submitted successfully with ${photoUpload.length} photo(s).`);
    closeReviewPopup();
}
