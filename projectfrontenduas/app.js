// AngularJS Controller untuk lokasi dan pencarian
var app = angular.module('travelApp', []);
app.controller('TravelController', function($scope) {
    $scope.locations = ['Thailand', 'Indonesia', 'Vietnam', 'Malaysia'];
    $scope.selectedLocation = $scope.locations[0];
    $scope.selectedDate = new Date().toISOString().split('T')[0];

    $scope.search = function() {
        alert('Searching for trips to ' + $scope.selectedLocation + ' on ' + $scope.selectedDate);
    };
});

let currentIndex = 0; // Indeks slide yang sedang aktif
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function updateSliderPosition() {
    // Geser slider berdasarkan indeks aktif
    slider.style.transform = `translateX(-${currentIndex * (slides[0].offsetWidth + 5)}px)`;
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--; // Geser ke slide sebelumnya
    } else {
        currentIndex = slides.length - 1; // Kembali ke slide terakhir
    }
    updateSliderPosition();
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++; // Geser ke slide berikutnya
    } else {
        currentIndex = 0; // Kembali ke slide pertama
    }
    updateSliderPosition();
}

// Inisialisasi posisi awal slider
updateSliderPosition();
