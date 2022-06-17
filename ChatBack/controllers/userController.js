const express = require('express');
const app = express();
const {User} =  require('./models');


app.get('/select', (req, res)   => {
    User.findAll()//{ where: {name: 'pedro'} }
    .then(users => {
        res.send(users);
    });
});

app.post('/insert', (req, res)   => {
    User.create({
        name: "pedro",//req.body.name,
        email: "a@a.com",//req.body.email,
        password: "1111111"//req.body.password
    }).catch((err) => {
        console.log(err);
    })
});
    
app.delete('/delete', (req, res)   => {
    User.destroy({ where: {name: 'pedro'} })
});

module.exports = {
    app
};