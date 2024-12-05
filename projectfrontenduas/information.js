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
            description: 'Gunung Bromo adalah salah satu gunung berapi paling terkenal di Indonesia yang terletak di kawasan Taman Nasional Bromo Tengger Semeru, Jawa Timur. Gunung ini memiliki ketinggian 2.329 meter di atas permukaan laut dan merupakan bagian dari Kaldera Tengger yang luas. Keindahan Gunung Bromo terletak pada lanskapnya yang unik, dengan padang pasir vulkanik yang mengelilingi kawahnya serta pemandangan matahari terbit yang memukau, menjadikannya daya tarik utama bagi wisatawan domestik maupun mancanegara. Selain keindahannya, Gunung Bromo juga memiliki makna spiritual bagi masyarakat Suku Tengger, yang setiap tahun menggelar upacara adat Yadnya Kasada untuk menghormati leluhur mereka.'
        },
        {
            id: 'popup3',
            image: 'assets/bunaken.png',
            alt: 'Location 3',
            location: 'North Sulawesi',
            title: 'Pulau Bunaken',
            description: 'Pulau Bunaken adalah sebuah pulau kecil yang terletak di Teluk Manado, Sulawesi Utara, Indonesia. Pulau ini merupakan bagian dari Taman Nasional Bunaken, yang terkenal sebagai salah satu destinasi wisata bahari terbaik di dunia. Keindahan Pulau Bunaken terletak pada keanekaragaman hayati bawah lautnya, dengan lebih dari 390 spesies terumbu karang, berbagai jenis ikan tropis, penyu, dan biota laut lainnya. Bunaken menjadi surga bagi penyelam dan snorkeler, yang datang untuk menikmati dinding karang yang spektakuler dan air laut yang jernih. Selain itu, pulau ini juga dihuni oleh komunitas lokal yang ramah, menawarkan pengalaman budaya yang autentik bagi para wisatawan.'
        },
        {
            id: 'popup4',
            image: 'assets/borobudur.png',
            alt: 'Location 4',
            location: 'Central Java',
            title: 'Candi Borobudur',
            description: 'Candi Borobudur adalah candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah, Indonesia. Dibangun pada abad ke-8 hingga ke-9 oleh Dinasti Syailendra, candi ini merupakan mahakarya arsitektur dan seni Buddha yang menggabungkan konsep kosmologi Buddha dengan keindahan alam sekitar. Borobudur memiliki struktur berbentuk mandala dengan sembilan tingkat, terdiri dari enam teras persegi dan tiga platform melingkar, yang dihiasi oleh 2.672 panel relief dan 504 arca Buddha. Candi ini juga terkenal sebagai situs ziarah spiritual dan budaya, terutama selama perayaan Waisak. Selain sebagai warisan dunia UNESCO, Borobudur adalah simbol kebanggaan Indonesia yang menarik wisatawan dari seluruh dunia.'
        },
        {
            id: 'popup5',
            image: 'assets/kotu.png',
            alt: 'Location 5',
            location: 'Jakarta',
            title: 'Kota Tua',
            description: 'Kota Tua adalah kawasan bersejarah di Jakarta, Indonesia, yang dikenal sebagai pusat aktivitas pemerintahan dan perdagangan pada masa kolonial Belanda. Kawasan ini memiliki banyak bangunan berarsitektur Eropa klasik yang masih terjaga, mencerminkan kejayaan Batavia sebagai ibu kota Hindia Belanda. Beberapa landmark terkenal di Kota Tua meliputi Museum Fatahillah, Toko Merah, dan Jembatan Kota Intan. Selain itu, kawasan ini juga menawarkan atraksi budaya seperti pasar seni, pertunjukan jalanan, dan kafe bergaya vintage yang menarik wisatawan lokal maupun mancanegara. Kota Tua tidak hanya menjadi tempat wisata sejarah, tetapi juga simbol penting perjalanan kota Jakarta dari masa kolonial menuju era modern.'
        },
        {
            id: 'popup6',
            image: 'assets/labuan bajo.png',
            alt: 'Location 6',
            location: 'East Nusa Tenggara',
            title: 'Labuan Bajo',
            description: 'Labuan Bajo adalah sebuah kota kecil yang terletak di ujung barat Pulau Flores, Nusa Tenggara Timur, Indonesia. Kota ini merupakan gerbang utama menuju Taman Nasional Komodo, rumah bagi satwa ikonik Komodo, spesies kadal terbesar di dunia. Labuan Bajo dikenal dengan keindahan alamnya yang menakjubkan, seperti pantai berpasir putih, perairan biru jernih, dan gugusan pulau eksotis. Beberapa destinasi populer di sekitar Labuan Bajo meliputi Pulau Padar, Pulau Rinca, dan Pink Beach. Selain itu, kota ini juga menjadi surga bagi penyelam dan snorkeler dengan keanekaragaman hayati lautnya yang luar biasa. Labuan Bajo kini berkembang sebagai destinasi wisata premium di Indonesia, menawarkan perpaduan sempurna antara petualangan, budaya, dan relaksasi.'
        },
        {
            id: 'popup7',
            image: 'assets/malioboro.png',
            alt: 'Location 7',
            location: 'Yogyakarta',
            title: 'Malioboro',
            description: 'Malioboro adalah jalan ikonik di Yogyakarta, Indonesia, yang menjadi salah satu destinasi wisata paling populer di kota ini. Terletak di pusat kota, Malioboro dikenal sebagai pusat aktivitas perdagangan dan budaya, dengan deretan toko, kios, dan pedagang kaki lima yang menawarkan berbagai oleh-oleh khas, seperti batik, kerajinan tangan, dan makanan tradisional. Suasana Malioboro semakin hidup dengan kehadiran musisi jalanan, seniman lokal, dan delman yang menambah nuansa khas Yogyakarta. Di sepanjang jalan, terdapat juga bangunan bersejarah, seperti Benteng Vredeburg dan Pasar Beringharjo, yang melengkapi daya tarik Malioboro sebagai pusat wisata belanja, seni, dan budaya.'
        },
        {
            id: 'popup8',
            image: 'assets/nusapeninda.png',
            alt: 'Location 8',
            location: 'Southeast Bali',
            title: 'Nusa Penida',
            description: 'Nusa Penida adalah sebuah pulau yang terletak di sebelah tenggara Bali, Indonesia, dan merupakan bagian dari Kabupaten Klungkung. Pulau ini terkenal dengan keindahan alamnya yang spektakuler, termasuk pantai berpasir putih, tebing-tebing curam, dan perairan biru jernih yang ideal untuk menyelam dan snorkeling. Beberapa tempat wisata terkenal di Nusa Penida meliputi Keling-Keling Beach dengan tebing yang menakjubkan, Angels Billabong, dan Broken Beach, yang menawarkan pemandangan yang memukau. Nusa Penida juga merupakan rumah bagi berbagai spesies laut, termasuk manta ray yang bisa ditemukan di Manta Point. Selain keindahan alam, pulau ini memiliki daya tarik budaya dan spiritual, dengan pura-pura seperti Pura Paluang dan Pura Goa Giri Putri yang memiliki nilai sejarah dan religius yang tinggi. Nusa Penida menjadi destinasi populer bagi wisatawan yang mencari petualangan dan pengalaman alam yang autentik.'
        },
        {
            id: 'popup9',
            image: 'assets/rajaampat.png',
            alt: 'Location 9',
            location: 'West Papua',
            title: 'Raja Ampat',
            description: 'Raja Ampat adalah sebuah kepulauan yang terletak di Papua Barat, Indonesia, dan dikenal sebagai salah satu destinasi wisata alam terbaik di dunia. Kepulauan ini terdiri dari lebih dari 1.500 pulau kecil dan terletak di pertemuan dua lautan besar, yaitu Laut Pasifik dan Laut Arafura, yang menciptakan keanekaragaman hayati laut yang luar biasa. Raja Ampat terkenal dengan keindahan bawah lautnya yang menakjubkan, menjadi surga bagi para penyelam dan snorkeler. Terumbu karang di Raja Ampat memiliki lebih dari 500 spesies koral, 1.300 spesies ikan, serta berbagai jenis penyu dan mamalia laut. Selain keindahan bawah laut, Raja Ampat juga menawarkan pemandangan alam yang spektakuler, termasuk karst batu kapur, pulau-pulau kecil yang indah, dan hutan tropis yang lebat. Dengan kekayaan alam dan budaya lokalnya, Raja Ampat menjadi salah satu tempat yang wajib dikunjungi bagi para pencinta alam dan petualangan.'
        },
        {
            id: 'popup10',
            image: 'assets/jamgandang.png',
            alt: 'Location 10',
            location: 'West Sumatra',
            title: 'Jam Gadang',
            description: 'Jam Gadang adalah jam besar yang terletak di pusat kota Bukittinggi, Sumatra Barat, Indonesia. Jam ini merupakan salah satu ikon kota dan simbol kebanggaan masyarakat Minangkabau. Dibangun pada masa penjajahan Belanda pada tahun 1926, Jam Gadang awalnya dirancang oleh seorang arsitek Belanda, namun pembangunan dan perancangannya melibatkan arsitek lokal. Jam Gadang memiliki desain bergaya Eropa dengan sentuhan arsitektur khas Minangkabau, ditandai dengan atap yang menyerupai gonjong (atap rumah adat Minangkabau).Jam Gadang terletak di pusat alun-alun kota, dekat dengan Pasar Atas, dan menjadi tempat berkumpulnya wisatawan serta penduduk setempat. Jam ini menjadi saksi bisu berbagai peristiwa sejarah dan budaya di Bukittinggi. Selain sebagai objek wisata, Jam Gadang juga sering dijadikan sebagai lokasi foto dan tempat perayaan berbagai acara penting, seperti perayaan Tahun Baru dan berbagai festival lokal.'
        },
        {
            id: 'popup11',
            image: 'assets/danautoba.png',
            alt: 'Location 11',
            location: 'North Sumatra',
            title: 'Danau Toba',
            description: 'Danau Toba adalah danau vulkanik terbesar di Indonesia dan bahkan di dunia, terletak di Pulau Sumatra, tepatnya di Provinsi Sumatera Utara. Danau ini memiliki panjang sekitar 100 km dan lebar 30 km, dengan kedalaman mencapai 450 meter. Danau Toba terbentuk akibat letusan supervolcano yang terjadi sekitar 74.000 tahun lalu, yang menghasilkan kaldera besar yang kini dipenuhi air dan membentuk danau yang indah. Di tengah danau, terdapat pulau Samosir, yang merupakan pulau besar dengan berbagai desa dan kebudayaan Batak yang kaya. Danau Toba dikenal dengan pemandangan alamnya yang menakjubkan, udara yang sejuk, serta budaya dan tradisi masyarakat Batak yang kental, termasuk rumah adat, tarian, dan musik tradisional. Danau Toba juga menjadi tujuan wisata populer bagi para wisatawan yang mencari pengalaman alam, rekreasi air, serta wawasan tentang sejarah dan budaya lokal.'
        },
        {
            id: 'popup12',
            image: 'assets/buntuburake.png',
            alt: 'Location 12',
            location: 'South Sulawesi',
            title: 'Buntu Burake',
            description: 'Buntu Burake adalah sebuah lokasi wisata yang terletak di Kabupaten Toraja, Sulawesi Selatan, Indonesia. Tempat ini terkenal karena menjadi salah satu titik terbaik untuk menikmati pemandangan matahari terbenam yang spektakuler. Buntu Burake menawarkan pemandangan indah dari ketinggian, di mana pengunjung bisa melihat hamparan perbukitan hijau, lembah, dan panorama alam Toraja yang menakjubkan. Lokasi ini juga memiliki daya tarik tersendiri bagi para fotografer dan wisatawan yang ingin menikmati suasana alam yang tenang dan mempesona. Buntu Burake sering dikunjungi oleh para wisatawan lokal maupun mancanegara yang ingin merasakan keindahan alam Toraja, sekaligus menyaksikan keunikan budaya dan tradisi masyarakat setempat.'
        },
        {
            id: 'popup13',
            image: 'assets/gilitrawa.png',
            alt: 'Location 13',
            location: 'West Nusa Tenggara',
            title: 'Gili Trawangan',
            description: 'Gili Trawangan adalah pulau terbesar dan paling populer di antara tiga pulau Gili yang terletak di sebelah barat Lombok, Indonesia. Pulau ini terkenal dengan keindahan pantai berpasir putihnya, perairan biru jernih, dan suasana yang santai dan ramah. Gili Trawangan menjadi destinasi favorit bagi para wisatawan, terutama bagi mereka yang mencari liburan tropis yang menyenangkan, aktivitas bawah laut, serta kehidupan malam yang hidup. Pulau ini menawarkan berbagai aktivitas seperti snorkeling, menyelam, dan bersepeda, serta wisata kuliner dan tempat-tempat nongkrong yang menarik. Tidak ada kendaraan bermotor di Gili Trawangan, sehingga transportasi utama adalah sepeda dan cidomo (kereta kuda tradisional). Gili Trawangan juga dikenal sebagai tempat yang ideal untuk menikmati pemandangan matahari terbenam dan untuk merasakan keindahan alam yang menakjubkan di sekitar kawasan Laut Lombok.'
        },
        {
            id: 'popup14',
            image: 'assets/belitung.png',
            alt: 'Location 14',
            location: 'Belitung',
            title: 'Pantai Belitung',
            description: 'Pantai Belitung, yang terletak di Pulau Belitung, Sumatera, Indonesia, dikenal dengan keindahan alamnya yang memukau. Pantai ini memiliki pasir putih yang halus, air laut yang jernih berwarna biru kehijauan, serta batu granit besar yang tersebar di sepanjang garis pantai, menciptakan pemandangan yang unik dan eksotis. Belitung terkenal dengan sejumlah pantai indah seperti Pantai Tanjung Tinggi, Pantai Tanjung Kelayang, dan Pantai Tanjung Binga, yang masing-masing menawarkan daya tarik tersendiri. Pantai-pantai di Belitung juga populer untuk aktivitas seperti snorkeling, menyelam, dan berperahu, yang memungkinkan pengunjung menikmati keindahan bawah lautnya yang kaya akan kehidupan laut dan terumbu karang. Selain keindahan alamnya, Belitung juga dikenal sebagai lokasi syuting film terkenal "Laskar Pelangi," yang semakin memperkenalkan keindahan pulau ini ke dunia.'
        },
        {
            id: 'popup15',
            image: 'assets/sacred.png',
            alt: 'Location 15',
            location: 'Bali',
            title: 'Sacred Monkey Forest Sanctuary',
            description: 'Sacred Monkey Forest Sanctuary adalah sebuah taman wisata yang terletak di Ubud, Bali, Indonesia. Tempat ini merupakan cagar alam dan situs suci yang dikenal dengan populasi monyet ekor panjang Bali yang berkeliaran bebas di dalamnya. Taman ini memiliki area yang luas, dihiasi oleh pepohonan besar, jalan setapak yang teduh, serta sejumlah kuil kuno dan struktur keagamaan yang memberikan nuansa spiritual dan mistis. Sacred Monkey Forest Sanctuary juga berfungsi sebagai tempat pelestarian dan penelitian bagi flora dan fauna, termasuk berbagai jenis tanaman langka dan satwa lainnya. Pengunjung dapat menjelajahi area taman, mengamati tingkah laku monyet yang lucu, serta menikmati keindahan arsitektur pura yang bersejarah seperti Pura Dalem Agung Padangtegal dan Pura Beji. Meskipun tempat ini sangat populer di kalangan wisatawan, pengunjung diingatkan untuk menjaga keamanan dan tidak memberi makan monyet agar tidak mengganggu ekosistem alami.'
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
