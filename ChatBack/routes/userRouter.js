const express = require('express')
const router = express.Router()
var verifyToken = require('../verifyToken.js');

const  { 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController.js')

router.get('/', verifyToken ,getUsers);

router.get('/:userID',verifyToken, getUser);

router.post('/' , createUser);

router.put('/:userID',verifyToken, updateUser);

router.delete('/:userID', verifyToken , deleteUser);

module.exports = router