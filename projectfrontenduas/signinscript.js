// script.js
angular.module('authApp', [])
.controller('AuthController', function($scope) {
    // Default ke halaman Sign In
    $scope.currentPage = 'signin';
    $scope.formData = {};

    // Navigasi antar halaman
    $scope.navigateTo = function(page) {
        $scope.currentPage = page;
    };

    // Fungsi dummy Sign In
    $scope.signIn = function() {
        if ($scope.formData.email && $scope.formData.password) {
            alert('Signed In with Email: ' + $scope.formData.email);
        } else {
            alert('Please fill in all fields.');
        }
    };

    // Fungsi dummy Sign Up
    $scope.signUp = function() {
        if ($scope.formData.firstName && $scope.formData.lastName && $scope.formData.email && $scope.formData.password) {
            alert('Account created for Email: ' + $scope.formData.email);
        } else {
            alert('Please fill in all fields.');
        }
    };
});
