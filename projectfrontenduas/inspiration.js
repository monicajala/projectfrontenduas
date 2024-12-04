angular.module('imageApp', [])
  .controller('imageController', function ($scope) {
    // Array of images with title, description, and link
    $scope.images = [
      { src: 'assets/bali.jpg', title: 'Image 1', description: 'Description for Image 1', link: 'https://www.indonesia.travel/id/id/ide-liburan/8-destinasi-wisata-ramah-anak-di-bogor-yang-cocok-dikunjungi-bersama-keluarga.html' },
      { src: 'assets/italy.jpg', title: 'Image 2', description: 'Description for Image 2', link: 'https://example.com/italy' },
      { src: 'assets/pantai.jpg', title: 'Image 3', description: 'Description for Image 3', link: 'https://example.com/pantai' },
      { src: 'assets/papua.jpg', title: 'Image 4', description: 'Description for Image 4', link: 'https://example.com/papua' },
      { src: 'assets/switzerland.jpg', title: 'Image 5', description: 'Description for Image 5', link: 'https://example.com/switzerland' },
      { src: 'assets/review.jpg', title: 'Image 6', description: 'Description for Image 6', link: 'https://example.com/review' },
      { src: 'assets/review.jpg', title: 'Image 7', description: 'Description for Image 7', link: 'https://example.com/review' },
      { src: 'assets/review.jpg', title: 'Image 8', description: 'Description for Image 8', link: 'https://example.com/review' },
      { src: 'assets/review.jpg', title: 'Image 9', description: 'Description for Image 9', link: 'https://example.com/review' },
      { src: 'assets/review.jpg', title: 'Image 10', description: 'Description for Image 10', link: 'https://example.com/review' }
    ];

    // Modal visibility and content
    $scope.modalVisible = false;
    $scope.modalContent = {};

    // Show modal with content based on clicked image
    $scope.showModal = function (index) {
      $scope.modalVisible = true;
      $scope.modalContent = $scope.images[index];
    };

    // Close the modal
    $scope.closeModal = function () {
      $scope.modalVisible = false;
    };

    // Toggle dark mode theme
    $scope.toggleTheme = function () {
      const body = document.body;
      body.classList.toggle('dark-mode');
      const themeToggleButton = document.querySelector('.theme-toggle');
      themeToggleButton.textContent = body.classList.contains('dark-mode')
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
    };

    // Scroll to top of the page
    $scope.scrollToTop = function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Lazy load images (optional optimization)
    $scope.lazyLoadImages = function () {
      const images = document.querySelectorAll('img[data-src]');
      const options = { rootMargin: '50px 0px', threshold: 0.01 };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      }, options);

      images.forEach(image => {
        observer.observe(image);
      });
    };

    // Initialize lazy loading after DOM content is loaded
    document.addEventListener('DOMContentLoaded', $scope.lazyLoadImages);
  });
