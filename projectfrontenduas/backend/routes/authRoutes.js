const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config(); // Untuk menggunakan variabel lingkungan

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || 'kucingkucing';  // Gunakan SECRET_KEY dari .env

// Router untuk Sign Up
router.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Validasi input
        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash password dan simpan pengguna baru
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).json({ error: err.message });
    }
});

// Router untuk Sign In
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login successful',
            token,
            user: { firstName: user.firstName, lastName: user.lastName, email: user.email }
        });
    } catch (err) {
        console.error('Error during signin:', err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
