angular.module('imageApp', [])
  .controller('imageController', function($scope) {


    
    // Array of images with title, description, and link
    $scope.images = [
      { src: 'assets/bali.jpg', title: 'Image 1', description: 'Description for Image 1', link: 'https://www.indonesia.travel/id/id/ide-liburan/8-destinasi-wisata-ramah-anak-di-bogor-yang-cocok-dikunjungi-bersama-keluarga.html' },
      { src: 'assets/italy.jpg', title: 'Image 2', description: 'Description for Image 2', link: 'https://example.com/italy' },
      { src: 'assets/pantai.jpg', title: 'Image 3', description: 'Description for Image 3', link: 'https://example.com/pantai' },
      { src: 'assets/papua.jpg', title: 'Image 4', description: 'Description for Image 4', link: 'https://example.com/papua' },
      { src: 'assets/switzerland.jpg', title: 'Image 5', description: 'Description for Image 5', link: 'https://example.com/switzerland' },
      { src: 'assets/review.jpg', title: 'Image 6', description: 'Description for Image 6', link: 'https://example.com/review' }
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
