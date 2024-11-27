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
