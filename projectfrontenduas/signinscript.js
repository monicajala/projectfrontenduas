var app = angular.module('authApp', []);

app.controller('AuthController', ['$scope', '$http','$window', function ($scope, $http, $window) {
    $scope.currentPage = 'signin'; // Default halaman adalah signin
    $scope.formData = {}; // Data form yang akan dikirim

    // Fungsi untuk berpindah halaman
    $scope.navigateTo = function (page) {
        $scope.currentPage = page;
    };

    // Cek apakah pengguna sudah login
    $scope.isLoggedIn = function () {
        return !!$window.localStorage.getItem('authToken'); // Token ada = logged in
    };

    // Arahkan pengguna ke halaman profil saat ikon diklik
    $scope.goToProfile = function () {
        alert('Navigasi ke halaman profil!');
        // Ganti ini dengan logika navigasi ke halaman profil, jika ada
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
        $http.post('http://localhost:3000/api/auth/signin', $scope.formData)
            .then(function (response) {
                $window.location.href='nyobaynoba.html'; // Pindah ke halaman utama
            })
            .catch(function (error) {
                console.error('Login error:', error);
                alert('Login gagal: ' + (error.data.error || 'Unknown error'));
            });
    };        
}]);
