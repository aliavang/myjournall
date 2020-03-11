const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
const port = process.env.PORT || 5000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
// Landing route
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

// Home route
app.use('/home', indexRoute);

// Post route
const postRoute = require('./routes/post');
app.use('/post', postRoute);

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
