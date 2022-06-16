const express = require('express');
const app = express();

const db = require('./models');

const {User} =  require('./models');

app.get('/select', (req, res)   => {
    res.send("select");
    });

app.get('/insert', (req, res)   => {
    User.create({
        name: "pedro",//req.body.name,
        email: "a@a.com",//req.body.email,
        password: "1111111"//req.body.password
    }).catch((err) => {
        console.log(err);
    })
    });
    
app.get('/delete', (req, res)   => {
    res.send("delete");
    });
            

db.sequelize.sync().then(req => {
    app.listen(3001, () => {
        console.log('listening on port 3001');
    });
});
