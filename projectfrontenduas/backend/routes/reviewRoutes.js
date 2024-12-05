const express = require('express');
const multer = require('multer');
const Review = require('../models/Review');

const router = express.Router();
const path = require('path');

// untuk file upload 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads')); // Gunakan path absolut
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

// handle review dari user 
router.post('/submit-review', upload.array('photos', 5), async (req, res) => {
    try {
        const { reviewName, reviewMessage } = req.body;
        const photoPaths = req.files.map(file => file.path);

        // simpen ke database
        const review = new Review({
            name: reviewName,
            message: reviewMessage,
            photos: photoPaths,
        });

        await review.save();

        res.status(200).json({
            message: 'Review submitted successfully!',
            data: review,
        });
    } catch (error) {
        console.error('Error saving review:', error);
        res.status(500).json({ message: 'Failed to submit review.' });
    }
});

// Export the router
module.exports = router;