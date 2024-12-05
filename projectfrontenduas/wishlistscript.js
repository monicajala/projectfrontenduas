// Define the AngularJS application
const app = angular.module('wishlistApp', []);

// Controller for wishlist
app.controller('WishlistController', function ($scope) {
    // Initialize wishlist
    $scope.wishlist = ["Want to go to Bali"];

    // Add new item to the wishlist
    $scope.addWishlist = function () {
        if ($scope.newWishlist) {
            $scope.wishlist.push($scope.newWishlist); // Add the new item
            $scope.newWishlist = ""; // Clear the input field
        }
    };
    

    $scope.themeText = "Switch to Dark Mode"; // Default text

$scope.toggleTheme = function () {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Tambahkan atau hapus kelas dark-mode
    $scope.themeText = body.classList.contains('dark-mode')
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
};
