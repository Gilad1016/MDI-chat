const express = require('express')
const router = express.Router()

var verifyToken = require('../verifyToken.js');

const  { authenticateUser } = require('../controllers/authController.js');

router.post('/logout',verifyToken, function(req, res) {
    //TODO: redirect user to login page
    
    res.status(200).send({ auth: false, token: null });
  });

router.post('/login', authenticateUser);

module.exports = router