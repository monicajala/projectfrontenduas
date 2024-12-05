const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    photos: {
        type: [String], 
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Review',reviewSchema);