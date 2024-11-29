const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Inisialisasi aplikasi
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/API', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Skema dan Model MongoDB
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    photos: [String],
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Review = mongoose.model('Review', reviewSchema);

// Konfigurasi direktori upload
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Konfigurasi multer untuk upload file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Validasi dengan Joi
const signupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

// Endpoint login
app.post('/API/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Endpoint signup
app.post('/API/signup', async (req, res) => {
    const { error } = signupSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            res.status(409).json({ message: 'Username already exists' });
        } else {
            const newUser = new User({ username, email, password });
            await newUser.save();
            res.status(201).json({ message: 'User created successfully', user: newUser });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Endpoint untuk submit review
app.post('/API/reviews', upload.array('photos', 5), async (req, res) => {
    try {
        const { name, message } = req.body;
        const photos = req.files.map(file => file.path);

        const newReview = new Review({ name, message, photos });
        await newReview.save();

        res.status(201).json({ message: 'Review submitted successfully', review: newReview });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Endpoint untuk mendapatkan semua review
app.get('/API/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Menjalankan server
const port = 27017;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

const cors = require('cors');
app.use(cors());
