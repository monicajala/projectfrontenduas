// Define AngularJS module and controller
var app = angular.module('gogowApp', [])
    app.controller('MainController', function($scope) {
    var mainCtrl = this;

    mainCtrl.destinations = [
            { name: 'Papua', image: 'assets/papua.jpg' },
            { name: 'Nusapeninda', image: 'assets/nusapeninda.png' },
            { name: 'Bali', image: 'assets/bali.jpg' },
            { name: 'Raja Ampat', image: 'assets/rajaampat.png' },
            { name: 'Candi Borobudur', image: 'assets/borobudur.png' },
            { name: 'Malioboro', image: 'assets/malioboro.png' }
    ];


    mainCtrl.testimonials = [
        { name: 'Jane Doe', message: 'The trip was amazing! Highly recommend this service.', image: 'assets/review.jpg' },
        { name: 'John Smith', message: 'Smooth and hassle-free planning. Absolutely loved it!', image: 'assets/review2.jpg' },
        { name: 'Sarah Day', message: 'The place was amazing! Definitely going to visit there again next time.', image: 'assets/review3.jpg' }
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

    $scope.posts = [
        {
            image: 'bali-airport.com',
            title: 'Escape Long Immigration Queue',
            location: 'Bali, Indonesia',
            date: 'December 5, 2024',
            description: 'Two international airports in Indonesia, namely Soekarno-Hatta (Soetta) Airport in Tangerang and I Gusti Ngurah Rai Airport in Bali have implemented autogate systems. Autogate integrates Face Recognition technology with Border Control Management (BCM) to support immigration supervision at the crossings. A total of 78 autogates at Soetta Airport have been operational since January 2024. Meanwhile, at Ngurah Rai Airport, 30 Autogates have also been operational since March 2024.',
            expanded: false
        },
        {
            image: 'https://via.placeholder.com/80',
            title: 'Journey through the Streets of Tokyo',
            location: 'Tokyo, Japan',
            date: 'November 30, 2024',
            description: 'Tokyo is a bustling metropolis blending modernity with traditional culture. From its towering skyscrapers and cutting-edge technology to its ancient temples, Tokyo offers a unique experience to every traveler. Join us as we explore this dynamic city...',
            expanded: false
        },
        {
            image: 'https://via.placeholder.com/80',
            title: 'A Weekend in Paris',
            location: 'Paris, France',
            date: 'November 25, 2024',
            description: 'Paris, the City of Lights, offers visitors a chance to experience world-class art, exquisite cuisine, and iconic landmarks like the Eiffel Tower, the Louvre, and Notre-Dame Cathedral. Whether you’re strolling along the Seine or enjoying a croissant at a sidewalk café, Paris is magical...',
            expanded: false
        },
        {
            image: 'https://via.placeholder.com/80',
            title: 'Discovering the Wonders of Machu Picchu',
            location: 'Cusco, Peru',
            date: 'November 20, 2024',
            description: 'Machu Picchu is one of the most iconic archaeological sites in the world, and for good reason. The Inca city, perched high in the Andes Mountains, offers breathtaking views, rich history, and an unmatched sense of mystery...',
            expanded: false
        }
    ];

    // Function to toggle post description
    $scope.toggleExpand = function(post) {
        post.expanded = !post.expanded;
    };

});
    


