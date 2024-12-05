var app = angular.module('authApp', []);

app.controller('AuthController', ['$scope', '$http', function ($scope, $http) {
    $scope.currentPage = 'signin'; // Default halaman adalah signin
    $scope.formData = {}; // Data form yang akan dikirim

    // Fungsi untuk berpindah halaman
    $scope.navigateTo = function (page) {
        $scope.currentPage = page;
    };

    // Fungsi Sign Up
    $scope.signUp = function () {
        console.log('Sign Up data:', $scope.formData);
        $http.post('http://localhost:3000/api/auth/signup', $scope.formData) // Update URL ke '/api/auth/signup'
            .then(function (response) {
                alert('Sign Up successful!');
                $scope.navigateTo('signin'); // Pindah ke halaman signin setelah signup
            })
            .catch(function (error) {
                console.error('Sign Up error:', error);
                alert('Failed to Sign Up. ' + error.data.error); // Tambahkan pesan error lebih detail
            });
    };

    // Fungsi Log In
    $scope.signIn = function () {
        console.log('Sign In data:', $scope.formData);
        $http.post('http://localhost:3000/api/auth/signin', $scope.formData) // Update URL ke '/api/auth/signin'
            .then(function (response) {
                alert('Log In successful!');
            })
            .catch(function (error) {
                console.error('Log In error:', error);
                alert('Failed to Log In. ' + error.data.error); // Tambahkan pesan error lebih detail
            });
    };
}]);
