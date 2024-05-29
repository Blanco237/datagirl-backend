const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to users')
})

router.post('/add', (req, res) => {
    res.send('New User Added')
})

router.post('/register', (req, res) => {
    res.send('Registration Successful')
})

router.post('/verify/otp', (req, res) => {
    res.send('OTP code: 37763')
})

module.exports = router;