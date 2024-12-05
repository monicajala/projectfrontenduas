angular.module('imageApp', [])
  .controller('imageController', function($scope) {
    $scope.images = [
      { src: 'assets/makbal.png', title: 'Makanan Popular Bali', description: '', link: 'https://www.idntimes.com/food/dining-guide/prila-arofani/tempat-makan-babi-guling-terenak-di-bali ' },
      { src: 'assets/wisbal.png', title: 'Wisata Popular Bali', description: '', link: 'https://travel.kompas.com/read/2024/11/19/190700727/5-wisata-pantai-terkenal-di-bali-cocok-untuk-liburan-akhir-tahun ' },
      { src: 'assets/olehbal.png', title: 'Oleh-oleh Popular Bali', description: '', link: 'https://www.detik.com/bali/wisata/d-6380165/15-tempat-oleh-oleh-bali-yang-hits-dan-terkenal ' },
      { src: 'assets/makjak.png', title: 'Makanan Popular Jakarta', description: '', link: 'https://kumparan.com/seputar-jakarta/35-tempat-makan-di-jakarta-yang-hits-dan-kekinian-21VQZCWcXQ2 ' },
      { src: 'assets/wisjak.png', title: 'Wisata Popular Jakarta', description: '', link: 'https://www.orami.co.id/magazine/wisata-jakarta' },
      { src: 'assets/olehjak.png', title: 'Oleh-oleh Popular Jakarta', description: '', link: 'https://megapolitan.kompas.com/read/2022/10/18/00300021/11-tempat-beli-oleh-oleh-di-jakarta?page=all ' },
      { src: 'assets/makjog.png', title: 'Makanan Popular Jogja', description: '', link: 'https://www.goersapp.com/blog/wisata-kuliner-jogja/' },
      { src: 'assets/wisjog.png', title: 'Wisata Popular Jogja', description: '', link: 'https://www.yogyes.com/id/yogyakarta-tourism-object/' },
      { src: 'assets/olehjog.png', title: 'Oleh-oleh Popular Jogja', description: '', link: 'https://terasmalioboro.jogjaprov.go.id/2022/08/10/5-pusat-oleh-oleh-jogja-terpopuler/' },
      { src: 'assets/makmed.png', title: 'Makanan Popular Medan', description: '', link: 'https://www.kompas.com/food/read/2023/09/03/111700875/35-tempat-makan-enak-di-medan-cocok-untuk-wisata-kulineran' },
      { src: 'assets/wismed.png', title: 'Wisata Popular Medan', description: '', link: 'https://www.idntimes.com/travel/destination/reza-iqbal/tempat-wisata-di-medan-yang-lagi-hits' },
      { src: 'assets/olehmed.png', title: 'Oleh-oleh Popular Medan', description: '', link: 'https://www.traveloka.com/id-id/explore/destination/pusat-oleh-oleh-medan-acc/389026' },
      { src: 'assets/makpal.png', title: 'Makanan Popular Palembang', description: '', link: 'https://www.detik.com/sumbagsel/kuliner/d-7473651/7-tempat-makan-di-palembang-dengan-cita-rasa-yang-autentik' },
      { src: 'assets/wispal.png', title: 'Wisata Popular Palembang', description: '', link: 'https://www.detik.com/sumbagsel/wisata/d-6761526/17-tempat-wisata-di-palembang-yang-lagi-hits-hingga-ramah-anak' },
      { src: 'assets/olehpal.png', title: 'Oleh-oleh Palembang', description: '', link: 'https://kumparan.com/jendela-dunia/4-pusat-oleh-oleh-palembang-yang-terkenal-21tZfKLuIky' },
    ];

    $scope.modalVisible = false;
    $scope.modalContent = {};

    // Show modal with content
    $scope.showModal = function(image) {
      $scope.modalContent = image;
      $scope.modalVisible = true;
    };

    // Close modal
    $scope.closeModal = function() {
      $scope.modalVisible = false;
    };

    $scope.toggleTheme = function () {
      const body = document.body;
      body.classList.toggle('dark-mode');
      const themeToggleButton = document.querySelector('.theme-toggle');
      themeToggleButton.textContent = body.classList.contains('dark-mode')
          ? "Switch to Light Mode"
          : "Switch to Dark Mode";
  };
  });

