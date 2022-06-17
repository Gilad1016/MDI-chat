const express = require('express')
const router = express.Router()

const  { 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    authenticateUser
} = require('../controllers/userController.js')

router.post('/login', authenticateUser);

router.get('/', getUsers);

router.get('/:userID', getUser);

router.post('/', createUser);

router.put('/:userID', updateUser);

router.delete('/:userID', deleteUser);

module.exports = router