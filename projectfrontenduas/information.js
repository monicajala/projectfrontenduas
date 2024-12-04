// Define the AngularJS application
var app = angular.module('imageCardsApp', []);

// Define the main controller
app.controller('MainController', ['$scope', function ($scope) {
    $scope.cards = [
        {
            id: 'popup1',
            image: 'assets/GWK.png',
            alt: 'Location 1',
            location: 'South of Bali',
            title: 'Grand Wisnu Kencana',
            description: 'Grand Wisnu Kencana (GWK) adalah taman budaya yang terletak di Bukit Ungasan, Badung, Bali...'
        },
        {
            id: 'popup2',
            image: 'assets/bromo.png',
            alt: 'Location 2',
            location: 'East Java',
            title: 'Mount Bromo',
            description: 'Gunung Bromo adalah salah satu gunung berapi paling terkenal di Indonesia...'
        },
        {
            id: 'popup3',
            image: 'assets/bunaken.png',
            alt: 'Location 3',
            location: 'North Sulawesi',
            title: 'Pulau Bunaken',
            description: 'Pulau Bunaken adalah sebuah pulau kecil yang terletak di sebelah utara Sulawesi...'
        },
        {
            id: 'popup4',
            image: 'assets/borobudur.png',
            alt: 'Location 4',
            location: 'Central Java',
            title: 'Candi Borobudur',
            description: 'Candi Borobudur adalah salah satu candi Buddha terbesar dan terpenting di dunia...'
        },
        {
            id: 'popup5',
            image: 'assets/kotu.png',
            alt: 'Location 5',
            location: 'Jakarta',
            title: 'Kota Tua',
            description: 'Kota Tua Jakarta, atau Batavia, merupakan kawasan bersejarah yang mencerminkan jejak sejarah...'
        },
        {
            id: 'popup6',
            image: 'assets/labuan bajo.png',
            alt: 'Location 6',
            location: 'East Nusa Tenggara',
            title: 'Labuan Bajo',
            description: 'Labuan Bajo adalah sebuah kota kecil yang terletak di ujung barat Pulau Flores...'
        }
    ];

    // Selected popup ID
    $scope.selectedPopup = null;

    // Open a popup
    $scope.openPopup = function (id) {
        $scope.selectedPopup = id;
    };

    // Close the popup
    $scope.closePopup = function () {
        $scope.selectedPopup = null;
    };

    // Toggle theme function
    $scope.toggleTheme = function () {
        var body = document.body;
        body.classList.toggle('dark-mode');
        var themeToggleButton = document.querySelector('.theme-toggle');
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = "Switch to Light Mode";
        } else {
            themeToggleButton.textContent = "Switch to Dark Mode";
        }
    };
}]);
