const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hms', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to Tejamya Hospital Management System API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});