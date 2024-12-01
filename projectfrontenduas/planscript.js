angular.module('imageApp', [])
  .controller('imageController', function($scope) {
    // Array of images with title and description
    $scope.images = [
      { src: 'assets/bali.jpg', title: 'Image 1', description: 'Description for Image 1' },
      { src: 'assets/italy.jpg', title: 'Image 2', description: 'Description for Image 2' },
      { src: 'assets/pantai.jpg', title: 'Image 3', description: 'Description for Image 3' },
      { src: 'assets/papua.jpg', title: 'Image 4', description: 'Description for Image 4' },
      { src: 'assets/switzerland.jpg', title: 'Image 5', description: 'Description for Image 5' },
      { src: 'assets/review.jpg', title: 'Image 6', description: 'Description for Image 6' }
    ];

    // Modal visibility and content
    $scope.modalVisible = false;
    $scope.modalContent = {};

    // Show modal with content based on clicked image
    $scope.showModal = function(index) {
      $scope.modalVisible = true;
      $scope.modalContent = $scope.images[index];
    };

    // Close the modal
    $scope.closeModal = function() {
      $scope.modalVisible = false;
    };
  });
