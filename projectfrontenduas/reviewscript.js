angular.module('reviewApp', [])
.controller('ReviewController', function($http) {
    var reviewCtrl = this;

    reviewCtrl.reviewName = '';
    reviewCtrl.reviewMessage = '';
    reviewCtrl.photos = [];

    // Handle file selection
    reviewCtrl.onFileSelect = function(files) {
        reviewCtrl.photos = files;
    };

    // Submit review
    reviewCtrl.submitReview = function() {
        if (!reviewCtrl.reviewName || !reviewCtrl.reviewMessage) {
            alert('Please fill out both your name and review message.');
            return;
        }

        var formData = new FormData();
        formData.append('reviewName', reviewCtrl.reviewName);
        formData.append('reviewMessage', reviewCtrl.reviewMessage);
        Array.from(reviewCtrl.photos).forEach(file => {
            formData.append('photos', file);
        });

        $http.post('http://localhost:3000/api/reviews/submit-review', formData, {
            headers: { 'Content-Type': undefined },
            transformRequest: angular.identity
        }).then(function(response) {
            console.log('Review submitted successfully:', response.data);
            alert('Review submitted successfully!');
            reviewCtrl.reviewName = '';
            reviewCtrl.reviewMessage = '';
            reviewCtrl.photos = [];
        }).catch(function(error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review.');
        });
    };
});
