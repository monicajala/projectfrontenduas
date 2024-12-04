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
            description: 'Garuda Wisnu Kencana (GWK) adalah taman budaya ikonik yang terletak di Bukit Ungasan, Bali, Indonesia. Tempat ini terkenal dengan Patung Garuda Wisnu Kencana, sebuah karya monumental setinggi 121 meter yang menggambarkan Dewa Wisnu menunggangi Garuda, simbol keberanian dan kebajikan. Dirancang oleh seniman Nyoman Nuarta, proyek ini dimulai pada tahun 1997 dan mencerminkan filosofi mendalam tentang keharmonisan antara manusia, alam, dan spiritualitas. Selain patung, GWK juga menawarkan atraksi seni, budaya, dan pemandangan spektakuler dari kawasan sekitarnya, menjadikannya salah satu destinasi wisata utama di Bali.'
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
        },
        {
            id: 'popup7',
            image: 'assets/malioboro.png',
            alt: 'Location 7',
            location: 'Yogyakarta',
            title: 'Malioboro',
            description: 'Sumedang dikenal dengan tahu khasnya yang menjadi ikon wisata kuliner daerah ini...'
        },
        {
            id: 'popup8',
            image: 'assets/nusapeninda.png',
            alt: 'Location 8',
            location: 'South East of Bali',
            title: 'Nusa Peninda',
            description: 'Gunung Rinjani adalah salah satu gunung tertinggi di Indonesia dan terkenal dengan danau Segara Anak...'
        },
        {
            id: 'popup9',
            image: 'assets/rajaampat.png',
            alt: 'Location 9',
            location: 'West Papua',
            title: 'Raja Ampat',
            description: 'Kepulauan Derawan adalah surga bagi penyelam dengan keanekaragaman hayati lautnya yang luar biasa...'
        },
        {
            id: 'popup10',
            image: 'assets/jamgandang.png',
            alt: 'Location 10',
            location: 'West Sumatra',
            title: 'Jam Gandang',
            description: 'Kepulauan Mentawai adalah destinasi populer untuk berselancar di Indonesia...'
        },
        {
            id: 'popup11',
            image: 'assets/danautoba.png',
            alt: 'Location 11',
            location: 'North Sumatra',
            title: 'Danau Toba',
            description: 'Pulau Komodo adalah rumah bagi komodo, spesies kadal terbesar di dunia...'
        },
        {
            id: 'popup12',
            image: 'assets/buntuburake.png',
            alt: 'Location 12',
            location: 'South Sulawesi',
            title: 'Buntu Burake Toraja',
            description: 'Danau Toba adalah danau vulkanik terbesar di dunia dan salah satu destinasi populer di Sumatera Utara...'
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
