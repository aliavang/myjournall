const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Import routes
const postRoute = require('./routes/post');
app.use('/post', postRoute);

app.get('/', (req, res) => {
    res.send('At Homepage');
});

// DB connection
mongoose.connect(
    process.env.DB_CONNECT, { useNewUrlParser: true , useUnifiedTopology: true },
    () => {
    console.log('Successfully connected to db');
});

// Listen
app.listen(port, () => {
    console.log('Live on port ' + port);
});
