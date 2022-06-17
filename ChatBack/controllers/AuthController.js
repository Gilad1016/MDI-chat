const User = require('../models').User;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../config/jwt_config');

const authenticateUser = ((req, res) => {
    console.log(req.body);
    user = User.findOne({where: { email: req.body.email }}).
    then(user => {;
        if (!user) return res.status(404).send('No user found.');
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });

        res.status(200).send({ auth: true, token: token });
    }).catch(err => {
        console.error(err);
        res.status(500).send('Error on the server.');
    })
});


module.exports = {
    authenticateUser
}