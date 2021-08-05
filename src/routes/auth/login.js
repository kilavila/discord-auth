const express = require('express');
const router = express.Router();

const {
    API_KEY
} = process.env;

router.post('/:apikey', (req, res) => {

    if (req.params.apikey !== API_KEY) {
        return res.status(401).send('Wrong API-Key!');
    }

    res.status(200).send('Login successful!');

});

module.exports = router;