var app = angular.module('imageCardsApp', []);

app.controller('MainController1', ['$scope', function ($scope) {
    // Data for all cards
    $scope.cards = [
        {
            id: 'popup1',
            image: 'assets/GWK.png',
            alt: 'Location 1',
            location: 'South of Bali',
            title: 'Grand Wisnu Kencana',
            description: 'Garuda Wisnu Kencana (GWK) adalah taman budaya ikonik yang terletak di Bukit Ungasan, Bali, Indonesia. Tempat ini terkenal dengan Patung Garuda Wisnu Kencana, sebuah karya monumental setinggi 121 meter yang menggambarkan Dewa Wisnu menunggangi Garuda.'
        },
        {
            id: 'popup2',
            image: 'assets/bromo.png',
            alt: 'Location 2',
            location: 'East Java',
            title: 'Mount Bromo',
            description: 'Gunung Bromo adalah salah satu gunung berapi paling terkenal di Indonesia yang terletak di kawasan Taman Nasional Bromo Tengger Semeru, Jawa Timur.'
        },
        {
            id: 'popup3',
            image: 'assets/bunaken.png',
            alt: 'Location 3',
            location: 'North Sulawesi',
            title: 'Pulau Bunaken',
            description: 'Pulau Bunaken adalah sebuah pulau kecil yang terletak di Teluk Manado, Sulawesi Utara, Indonesia.'
        },
        {
            id: 'popup4',
            image: 'assets/borobudur.png',
            alt: 'Location 4',
            location: 'Central Java',
            title: 'Candi Borobudur',
            description: 'Candi Borobudur adalah candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah, Indonesia.'
        },
        {
            id: 'popup5',
            image: 'assets/kotu.png',
            alt: 'Location 5',
            location: 'Jakarta',
            title: 'Kota Tua',
            description: 'Kota Tua adalah kawasan bersejarah di Jakarta, Indonesia, yang dikenal sebagai pusat aktivitas pemerintahan dan perdagangan pada masa kolonial Belanda.'
        },
        {
            id: 'popup6',
            image: 'assets/labuan bajo.png',
            alt: 'Location 6',
            location: 'East Nusa Tenggara',
            title: 'Labuan Bajo',
            description: 'Labuan Bajo adalah sebuah kota kecil yang terletak di ujung barat Pulau Flores, yang menjadi gerbang menuju Taman Nasional Komodo.'
        },
        {
            id: 'popup7',
            image: 'assets/malioboro.png',
            alt: 'Location 7',
            location: 'Yogyakarta',
            title: 'Malioboro',
            description: 'Jalan Malioboro adalah destinasi wisata belanja dan kuliner yang terkenal di Yogyakarta.'
        },
        {
            id: 'popup8',
            image: 'assets/nusapeninda.png',
            alt: 'Location 8',
            location: 'Southeast Bali',
            title: 'Nusa Penida',
            description: 'Nusa Penida adalah pulau kecil di dekat Bali yang terkenal dengan keindahan pantainya seperti Pantai Kelingking.'
        },
        {
            id: 'popup9',
            image: 'assets/rajaampat.png',
            alt: 'Location 9',
            location: 'West Papua',
            title: 'Raja Ampat',
            description: 'Raja Ampat adalah kepulauan di Papua Barat, Indonesia, yang dikenal sebagai surga bagi penyelam dengan biodiversitas lautnya yang luar biasa.'
        },
        {
            id: 'popup10',
            image: 'assets/jamgandang.png',
            alt: 'Location 10',
            location: 'West Sumatra',
            title: 'Jam Gadang',
            description: 'Jam Gadang adalah menara jam ikonik yang menjadi landmark kota Bukittinggi di Sumatera Barat.'
        },
        {
            id: 'popup11',
            image: 'assets/danautoba.png',
            alt: 'Location 11',
            location: 'North Sumatra',
            title: 'Danau Toba',
            description: 'Danau Toba adalah danau vulkanik terbesar di dunia dan salah satu destinasi wisata utama di Sumatera Utara.'
        },
        {
            id: 'popup12',
            image: 'assets/buntuburake.png',
            alt: 'Location 12',
            location: 'South Sulawesi',
            title: 'Buntu Burake',
            description: 'Buntu Burake adalah situs patung Yesus Memberkati yang terletak di Tana Toraja, Sulawesi Selatan.'
        },
        {
            id: 'popup13',
            image: 'assets/gilitrawa.png',
            alt: 'Location 13',
            location: 'West Nusa Tenggara',
            title: 'Gili Trawangan',
            description: 'Tanah Lot adalah pura yang terletak di atas batu karang di lepas pantai Bali, terkenal dengan pemandangan matahari terbenamnya.'
        },
        {
            id: 'popup14',
            image: 'assets/belitung.png',
            alt: 'Location 14',
            location: 'Belitung',
            title: 'Pantai Belitung',
            description: 'Pantai di Belitung terkenal dengan batu granit besar dan air lautnya yang jernih, menawarkan pemandangan yang luar biasa.'
        },
        {
            id: 'popup15',
            image: 'assets/sacred.png',
            alt: 'Location 15',
            location: 'Bali',
            title: 'Sacred Monkey Forest Sanctuary',
            description: 'Pulau Komodo adalah rumah bagi Komodo, spesies kadal terbesar di dunia, dan merupakan bagian dari Taman Nasional Komodo.'
        }
    ];

    $scope.selectedPopup = null;

    $scope.openPopup = function (id) {
        $scope.selectedPopup = id;
    };

    $scope.closePopup = function () {
        $scope.selectedPopup = null;
    };

    $scope.toggleTheme = function () {
        const body = document.body;
        body.classList.toggle('dark-mode');
        const themeToggleButton = document.querySelector('.theme-toggle');
        themeToggleButton.textContent = body.classList.contains('dark-mode')
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";
    };
}]);
