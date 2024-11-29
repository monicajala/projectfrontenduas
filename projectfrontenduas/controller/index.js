const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

mongoose.connect('mongodb://localhost:27017/API');

const userSchema = new mongoose.Schema({
    username: {type:String, required: true, unique: true},
    email: { type: String,  required: true},
    password: { type: String, required: true}
});

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true},
    message: { type: String, required: true},
    photos: [String],
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('User',userSchema);
const Review = mongoose.model('Review',reviewSchema);

// konfigurasi untuk upload file 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage});

app.post('/API/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/API/signup', async (req,res) => {
    const {username, email, password} = req.body;
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        res.status(409).json({message: 'Username already exist'});
    } else {
        const newUser = { id: users.length + 1, username, email, password};
        users.push(newUser);
        res.status(201).json({message: 'User created successfully', user: newUser});
    }
});

app.post('/API/reviews', upload.array('photos',5), async(req,res) => {
    const { name, message } = req.body;
    const photos = req.files.map(file => file.path);

    const newReview = {
        id: reviews.length + 1,
        name,
        message,
        photos,
        date: new Date()
    };

    reviews.push(newReview);
    res.status(201).json({ message: 'Review submitted successfully', review: newReview});
});

app.get('/API/reviews', async(req,res) => {
    res.status(200).json(reviews);
});

const port = 3001;
app.listen(port, () => {
    console.log(`server is Running at http://localhost:${port}`);
});