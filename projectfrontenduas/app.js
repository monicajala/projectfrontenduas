// Define AngularJS module and controller
var app = angular.module('gogowApp', []);

app.controller('MainController', function($scope) {
    var mainCtrl = this;

    // Default state - Pastikan nilai boolean untuk popup didefinisikan dengan benar
    mainCtrl.isLoginPopupOpen = false;
    mainCtrl.isSignUpPopupOpen = false;
    mainCtrl.isReviewPopupOpen = false;
    
    mainCtrl.destinations = [
        { name: 'Italy', image: 'assets/italy.jpg', packages: 20 },
        { name: 'Switzerland', image: 'assets/switzerland.jpg', packages: 15 },
        { name: 'Greece', image: 'assets/greece.jpg', packages: 12 },
        { name: 'Pantai', image: 'assets/pantai.jpg', packages: 12 },
        { name: 'Vietnam', image: 'assets/vietnam.jpg', packages: 12 },
        { name: 'Papua', image: 'assets/papua.jpg', packages: 12 }
    ];

    mainCtrl.sliderIndex = 0;  // Indeks slider awal
    mainCtrl.sliderOffset = 0; // Offset pergeseran slider

    // Fungsi untuk menggerakkan slide
    mainCtrl.moveSlide = function(step) {
        var totalSlides = document.querySelectorAll('.slide').length;
        mainCtrl.sliderIndex += step;

        if (mainCtrl.sliderIndex < 0) {
            mainCtrl.sliderIndex = totalSlides - 1;  // kembali ke slide terakhir
        } else if (mainCtrl.sliderIndex >= totalSlides) {
            mainCtrl.sliderIndex = 0;  // kembali ke slide pertama
        }

        mainCtrl.sliderOffset = -mainCtrl.sliderIndex * 100;  // Mengatur offset slider
    };

    mainCtrl.testimonials = [
        { name: 'Jane Doe', message: 'The trip was amazing! Highly recommend this service.', image: 'assets/review.jpg' },
        { name: 'John Smith', message: 'Smooth and hassle-free planning. Absolutely loved it!', image: 'assets/review2.jpg' }
    ];

    // Function untuk membuka dan menutup popup
    mainCtrl.openPopup = function(popupId) {
        // Menyembunyikan semua popup terlebih dahulu
        mainCtrl.isLoginPopupOpen = false;
        mainCtrl.isSignUpPopupOpen = false;
        mainCtrl.isReviewPopupOpen = false;

        // Menampilkan popup yang diminta
        if (popupId === 'loginPopup') {
            mainCtrl.isLoginPopupOpen = true;
        } else if (popupId === 'signUpPopup') {
            mainCtrl.isSignUpPopupOpen = true;
        } else if (popupId === 'reviewPopup') {
            mainCtrl.isReviewPopupOpen = true;
        }
    };

    // Fungsi untuk menutup popup
    mainCtrl.closePopup = function(popupId) {
        if (popupId === 'loginPopup') {
            mainCtrl.isLoginPopupOpen = false;
        } else if (popupId === 'signUpPopup') {
            mainCtrl.isSignUpPopupOpen = false;
        } else if (popupId === 'reviewPopup') {
            mainCtrl.isReviewPopupOpen = false;
        }
    };

    // Fungsi untuk toggle tema
    mainCtrl.toggleTheme = function() {
        var body = document.body;
        body.classList.toggle('dark-mode');
        var themeToggleButton = document.querySelector('.theme-toggle');
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = "Switch to Light Mode";
        } else {
            themeToggleButton.textContent = "Switch to Dark Mode";
        }
    };

    // Fungsi untuk submit review
    mainCtrl.submitReview = function() {
        // Submit review logic
    };

    // Fungsi untuk membuka popup review
    mainCtrl.openReviewPopup = function() {
        mainCtrl.isReviewPopupOpen = true;
    };

    // Fungsi untuk menutup popup review
    mainCtrl.closeReviewPopup = function() {
        mainCtrl.isReviewPopupOpen = false;
    };

    
});


