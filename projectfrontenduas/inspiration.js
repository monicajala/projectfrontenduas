angular.module('imageApp', [])
  .controller('imageController', function($scope) {
    $scope.images = [
      { src: 'assets/borobudur.png', title: 'hellooo', description: 'Description 1', link: '#' },
      { src: 'assets/bali.jpg', title: 'Image 2', description: 'Description 2', link: '#' },
      { src: 'assets/bromo.png', title: 'Image 3', description: 'Description 3', link: '#' },
      { src: 'assets/bunaken.png', title: 'Image 4', description: 'Description 4', link: '#' },
      { src: 'assets/danautoba.png', title: 'Image 5', description: 'Description 5', link: '#' },
      { src: 'assets/gilitrawa.png', title: 'Image 6', description: 'Description 6', link: '#' },
      { src: 'assets/GWK.png', title: 'Image 7', description: 'Description 7', link: '#' },
      { src: 'assets/kotu.png', title: 'Image 8', description: 'Description 8', link: '#' },
      { src: 'assets/labuan bajo.png', title: 'Image 9', description: 'Description 9', link: '#' },
      { src: 'assets/nusapeninda.png', title: 'Image 10', description: 'Description 10', link: '#' },
      { src: 'assets/sacred.png', title: 'Image 11', description: 'Description 11', link: '#' },
      { src: 'assets/rajaampat.png', title: 'Image 12', description: 'Description 12', link: '#' },
      { src: 'assets/buntuburake.png', title: 'Image 11', description: 'Description 13', link: '#' },
      { src: 'assets/jamgandang.png', title: 'Image 12', description: 'Description 14', link: '#' },
      { src: 'assets/belitung.png', title: 'Image 11', description: 'Description 15', link: '#' },
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

