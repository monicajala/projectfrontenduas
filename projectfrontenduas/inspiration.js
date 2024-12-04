angular.module('imageApp', [])
  .controller('imageController', function($scope) {
    $scope.images = [
      { src: 'assets/papua.jpg', title: 'apalaaaa', description: 'hehehehe', link: 'https://papua.go.id/view-detail-page-254/sekilas-papua-.html' },
      { src: 'assets/image2.jpg', title: 'Image 2', description: 'Description 2', link: '#' },
      { src: 'assets/image3.jpg', title: 'Image 3', description: 'Description 3', link: '#' },
      { src: 'assets/image4.jpg', title: 'Image 4', description: 'Description 4', link: '#' },
      { src: 'assets/image5.jpg', title: 'Image 5', description: 'Description 5', link: '#' },
      { src: 'assets/image6.jpg', title: 'Image 6', description: 'Description 6', link: '#' },
      { src: 'assets/image7.jpg', title: 'Image 7', description: 'Description 7', link: '#' },
      { src: 'assets/image8.jpg', title: 'Image 8', description: 'Description 8', link: '#' },
      { src: 'assets/image9.jpg', title: 'Image 9', description: 'Description 9', link: '#' },
      { src: 'assets/image10.jpg', title: 'Image 10', description: 'Description 10', link: '#' },
      { src: 'assets/image11.jpg', title: 'Image 11', description: 'Description 11', link: '#' },
      { src: 'assets/image12.jpg', title: 'Image 12', description: 'Description 12', link: '#' },
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
