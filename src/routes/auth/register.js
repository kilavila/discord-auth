// import required libraries
const express = require('express');
const router = express.Router();

// environment variables from .env file
const {
    API_KEY
} = process.env;

// handle http post method: http://127.0.0.1:3000/login/apiKey
router.post('/:apikey', (req, res) => {

    // return response if api key is wrong
    if (req.params.apikey !== API_KEY) {
        return res.status(401).send('Wrong API-Key!');
    }

    // response if api key was correct
    res.status(200).send('Register successful!');

});

// export router
module.exports = router;