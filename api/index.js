const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs')
const User = require('./models/user.js')
require('dotenv').config()
const app = express()

const secret = bcrypt.genSaltSync(10);

app.use(express.json())

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

mongoose.connect(process.env.MONGO_URL);

// Define a route
app.get('/', (req, res) => {
    res.json('testing');
});


app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    const userData = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, secret),
    })

    res.json(userData);
})

// Start the server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});