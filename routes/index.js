const express = require('express');
const router = express.Router();

const app = express();

// Landing page
router.get('/', (req, res) => {
    res.render('index');
});

// Home page
router.get('/home', (req, res) => {
    res.send('This is the home page');
});

module.exports = router;