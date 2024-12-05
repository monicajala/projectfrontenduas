// Define AngularJS module and controller
var app = angular.module('gogowApp', [])
    app.controller('MainController', function($scope) {
    var mainCtrl = this;

    mainCtrl.destinations = [
            { name: 'Papua', image: 'assets/papua.jpg' },
            { name: 'Nusapeninda', image: 'assets/nusapeninda.png' },
            { name: 'Bali', image: 'assets/bali.jpg' },
            { name: 'Raja Ampat', image: 'assets/rajaampat.png' },
            { name: 'Candi Borobudur', image: 'assets/borobudur.png' },
            { name: 'Malioboro', image: 'assets/malioboro.png' }
    ];


    mainCtrl.testimonials = [
        { name: 'Jane Doe', message: 'The trip was amazing! Highly recommend this service.', image: 'assets/review.jpg' },
        { name: 'John Smith', message: 'Smooth and hassle-free planning. Absolutely loved it!', image: 'assets/review2.jpg' },
        { name: 'Sarah Day', message: 'The place was amazing! Definitely going to visit there again next time.', image: 'assets/review3.jpg' }
    ];


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

    $scope.posts = [
        {
            image: 'assets/news1.png',
            title: 'Escape Long Immigration Queue Using Autogates',
            location: 'Wonderful Indonesia',
            date: 'November 23, 2024',
            description: 'Two international airports in Indonesia, namely Soekarno-Hatta (Soetta) Airport in Tangerang and I Gusti Ngurah Rai Airport in Bali have implemented autogate systems. Autogate integrates Face Recognition technology with Border Control Management (BCM) to support immigration supervision at the crossings. A total of 78 autogates at Soetta Airport have been operational since January 2024. Meanwhile, at Ngurah Rai Airport, 30 Autogates have also been operational since March 2024.',
            expanded: false
        },
        {
            image: 'assets/news2.png',
            title: 'Indonesia Introduces Visa-Free for 13 Countries',
            location: 'Petir G. Bhwana',
            date: 'November 19, 2024',
            description: 'This new policy is outlined in Presidential Regulation (Perpres) No. 95 of 2024, which was ratified on August 29, 2024. Under this regulation, the designated 13 countries which are referred to as "Visa-Free Visit Subjects" are exempt from the requirement to obtain a visit visa to enter Indonesia. The thirteen countries included in the visa-free visit subjects are Brunei Darussalam, the Philippines, Cambodia, Laos, Malaysia, Myanmar, Singapore, Thailand, Vietnam, Timor Leste, Suriname, Colombia, and Hong Kong.',
            expanded: false
        },
        {
            image: 'assets/news3.png',
            title: 'Bali Flights Interrupted by Volcanic Eruption',
            location: 'Lacey Pfalz',
            date: 'November 14, 2024',
            description: 'Travelers who are leaving or entering the popular Indonesian island of Bali found their flights canceled on November 13 as the ongoing eruption of the nation’s Mount Lewotobi Laki-Laki volcano. According to the Associated Press, the volcano is causing problems for travelers heading to and from Bali, prompting international airlines like Air New Zealand, Virgin Australia and Korean Air to cancel or reroute their flights due to ash, about which the country’s Air Navigation has issued a safety warning. Over the past four days, 84 flights to and from Bali’s Ngurah Rai International Airport have been impacted.',
            expanded: false
        },
        {
            image: 'assets/news4.png',
            title: 'Indonesia Named Asia Leading Tourism Destination',
            location: 'Tempo.co',
            date: 'November 24, 2024',
            description: 'Indonesia had just won the title of Asias Leading Adventure Tourism Destination at the 2024 World Travel Awards held Tuesday, September 3, 2024 in Manila, Philippines. This title was previously awarded to Japan, Thailand, and Sri Lanka in previous years in turn. This year, the other countries nominated for the Leading Adventure Travel Destinations in Asia category are China, India, Japan, Malaysia, Nepal, Sri Lanka, and Thailand. The World Travel Awards recognizes countries for excellence in various sectors of the tourism industry. The awards are presented annually based on votes from travel industry professionals and the general public.',
            expanded: false
        }
    ];

    // Function to toggle post description
    $scope.toggleExpand = function(post) {
        post.expanded = !post.expanded;
    };

});
    


