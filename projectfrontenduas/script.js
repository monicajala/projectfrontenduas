// AngularJS Application Module
var app = angular.module('travelApp', []);

// AngularJS Controller untuk lokasi dan pencarian
app.controller('TravelController', function ($scope) {
    $scope.locations = ['Thailand', 'Indonesia', 'Vietnam', 'Malaysia'];
    $scope.selectedLocation = $scope.locations[0];
    $scope.selectedDate = new Date().toISOString().split('T')[0];

    $scope.search = function () {
        alert('Searching for trips to ' + $scope.selectedLocation + ' on ' + $scope.selectedDate);
    };

    // Initialize Slider Functionality in AngularJS
    $scope.initSlider = function () {
        let currentIndex = 0; // Indeks slide yang sedang aktif
        const slides = document.querySelectorAll('.slide');
        const slider = document.querySelector('.slider');
        const prevButton = document.querySelector('.nav-button.prev');
        const nextButton = document.querySelector('.nav-button.next');

        // Update slider position based on the current index
        function updateSliderPosition() {
            const slideWidth = slides[0].offsetWidth + 10; // Slide width + margin
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        // Previous slide functionality
        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--; // Geser ke slide sebelumnya
            } else {
                currentIndex = slides.length - 1; // Kembali ke slide terakhir
            }
            updateSliderPosition();
        }

        // Next slide functionality
        function nextSlide() {
            if (currentIndex < slides.length - 1) {
                currentIndex++; // Geser ke slide berikutnya
            } else {
                currentIndex = 0; // Kembali ke slide pertama
            }
            updateSliderPosition();
        }

        // Event listeners for buttons
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        // Initialize slider position
        window.addEventListener('resize', updateSliderPosition);
        updateSliderPosition();
    };

    // Call the slider initialization function after DOM is ready
    setTimeout($scope.initSlider, 0);
});
