const { response } = require("express");

let slideIndex = 0;

function moveSlide(step) {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    slideIndex += step;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;  // kembali ke slide terakhir
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;  // kembali ke slide pertama
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
// Handle review submission
function submitReview() {
    const name = document.getElementById('reviewName').value;
    const message = document.getElementById('reviewMessage').value;
    const photos = document.getElementById('photoUpload').files;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('message', message);

    for (let i = 0; i < photos.length; i++) {
        formData.append('photos', photos[i]);
    }

    fetch('http://localhost:3001/API/reviews', {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            alert('Review submitted successfully!');
            console.log(data);
        })
        .catch((error) => console.error('Error:', error));
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

    fetch('http://localhost:3001/API/login', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password}),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'Login successful') {
                alert('Login successful!!'); 
            } else {
                alert('Invalid credentials');
            }
        })
        .catch((error) => console.error('Error:',error));

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

    fetch('http://localhost:3001/API/signup',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({username,email,password}),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'User created successfully'){
                alert('Sign-up successful!');
            } else {
                alert('Username already exists');
            }
        })
        .catch((error) => console.error('Error:',error));

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

// Function to toggle between dark and light mode
function toggleTheme() {
    // Get the body element
    const body = document.body;

    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Change the button text based on the current theme
    const themeToggleButton = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = "Switch to Light Mode";
    } else {
        themeToggleButton.textContent = "Switch to Dark Mode";
    }
}

// Check if dark mode is enabled in local storage
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-toggle').textContent = "Switch to Light Mode";
    }
};

// Save the theme preference in localStorage
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const themeToggleButton = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = "Switch to Light Mode";
        localStorage.setItem('theme', 'dark'); // Save dark mode preference
    } else {
        themeToggleButton.textContent = "Switch to Dark Mode";
        localStorage.setItem('theme', 'light'); // Save light mode preference
    }
}
