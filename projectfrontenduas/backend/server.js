const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Gunakan express.json() untuk parsing JSON
app.use(express.urlencoded({ extended: true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Koneksi MongoDB menggunakan async/await
(async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Gogow', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1); // Keluar jika koneksi gagal
    }
})();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});
