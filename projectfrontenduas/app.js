// Define AngularJS module and controller
var app = angular.module('gogowApp', [])
    app.controller('MainController', function() {
    var mainCtrl = this;

    mainCtrl.destinations = [
            { name: 'Paris', image: 'assets/papua.jpg' },
            { name: 'New York', image: 'assets/nusapeninda.png' },
            { name: 'Tokyo', image: 'assets/bali.jpg' },
            { name: 'London', image: 'assets/rajaampat.png' },
            { name: 'Rome', image: 'assets/borobudur.png' },
            { name: 'Sydney', image: 'assets/malioboro.png' }
    ];


    mainCtrl.testimonials = [
        { name: 'Jane Doe', message: 'The trip was amazing! Highly recommend this service.', image: 'assets/review.jpg' },
        { name: 'John Smith', message: 'Smooth and hassle-free planning. Absolutely loved it!', image: 'assets/review2.jpg' },
        { name: 'Sarah Day', message: 'The place was amazing! Definetly going to visit there again next time.', image: 'assets/review3.jpg' }
    ];


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

});
    


