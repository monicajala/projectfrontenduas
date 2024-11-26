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

// Open popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

// Close popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Show sign-up popup
function showSignUp() {
    closePopup('loginPopup');
    openPopup('signUpPopup');
}

// Show login popup
function showLogin() {
    closePopup('signUpPopup');
    openPopup('loginPopup');
}

// Handle login action
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Welcome back, ${username}!`);
    closePopup('loginPopup');
}

// Handle sign-up action
function signUp() {
    const username = document.getElementById("signUpUsername").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert(`Account created successfully for ${username}!`);
    closePopup('signUpPopup');
}
