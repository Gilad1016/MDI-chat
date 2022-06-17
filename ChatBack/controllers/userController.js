const User = require('../models').User;

const getUsers = ((req, res) => {
    User.findAll().then((users) => {
        res.json(users);
    }).catch(err => {
        res.status(500).send(err)
    });
})

const getUser = ((req, res) => {
    const id = Number(req.params.userID)
    const user = User.findOne(user => user.id === id)
        if (!user) {
        return res.status(404).send('user not found')
    }
    res.json(user)
})

const createUser = ((req, res) => {
    const newUser = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    };
    console.log(newUser);
    User.create(newUser).then(user => {
        res.status(201).json(user)
    }).catch(err => {
        res.status(400).send(err)
    });
})

const updateUser = ((req, res) => {
    const id = Number(req.params.userID)
    const index = User.findIndex(user => user.id === id)
    const updatedUser = {
        id: User[index].id,
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }

    User[index] = updatedUser
    res.status(200).json('User updated')
})

const deleteUser = ((req, res) => {
    const id = Number(req.params.userID)
    const index = User.findIndex(user => user.id === id)
    User.splice(index,1)
    res.status(200).json('User deleted')
})

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}