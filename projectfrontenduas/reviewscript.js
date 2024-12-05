// Define the AngularJS module and controller
angular.module('reviewApp', [])
.controller('ReviewController', function() {
    var reviewCtrl = this;

    // Initialize variables
    reviewCtrl.reviewName = '';
    reviewCtrl.reviewMessage = '';
    reviewCtrl.photos = [];

    // Function to handle review submission
    reviewCtrl.submitReview = function() {
        if (!reviewCtrl.reviewName || !reviewCtrl.reviewMessage) {
            alert('Please fill out both your name and review message.');
            return;
        }

        // Log the submitted review (you can replace this with actual logic, e.g., saving to a database)
        console.log('Review Submitted!');
        console.log('Name:', reviewCtrl.reviewName);
        console.log('Review:', reviewCtrl.reviewMessage);
        console.log('Photos:', reviewCtrl.photos);

        // Reset form after submission
        reviewCtrl.reviewName = '';
        reviewCtrl.reviewMessage = '';
        reviewCtrl.photos = [];

        alert('Thank you for your review!');
    };
});
