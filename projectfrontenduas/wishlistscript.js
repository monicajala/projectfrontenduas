// Define the AngularJS application
const app = angular.module('wishlistApp', []);

// Controller for wishlist
app.controller('WishlistController', function ($scope) {
    // Initialize wishlist
    $scope.wishlist = ["Want to Bali"];

    // Add new item to the wishlist
    $scope.addWishlist = function () {
        if ($scope.newWishlist) {
            $scope.wishlist.push($scope.newWishlist); // Add the new item
            $scope.newWishlist = ""; // Clear the input field
        }
    };
});
// Fungsi untuk toggle tema
mainCtrl.toggleTheme = function() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    var themeToggleButton = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = "Switch to Light Mode";
    } else {
        themeToggleButton.textContent = "Switch to Dark Mode";
    }
};
