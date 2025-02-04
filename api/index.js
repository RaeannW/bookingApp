const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

// Define a route
app.get('/', (req, res) => {
    res.json('testing');
});

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    res.json({name, email, password})
})

// Start the server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});