const jwt = require('jsonwebtoken')
const {getUserByName} = require('../db/users')
const verifyJwt = require('express-jwt')
const {compare} = require('./hash')


function issue (req, res) {
    console.log(req.body);
    getUserByName(req.body.name, req.app.get('db'))
    .then(user => {
        console.log({user})
        console.log(user.hash)
        compare(req.body.password, user.hash, (err, match) => {
            console.log({user, match});
            if (err) res.status(500).json({message: err.message})
            else if (!match) res.status(400).json({message: 'password is incorrect'})
            else {
                var token = createToken(user, process.env.JWT_SECRET)
                res.json({
                    message: 'Authentication successful', 
                    token
                })
            }
        })
    })
    .catch(err => console.log({err}))
}

function createToken (user, secret) {
    return jwt.sign({
        id: user.id, 
        name: user.name
    }, secret, {
        expiresIn: '30m'
    })
}

function getSecret(req, payload, done) {
    done(null, process.env.JWT_SECRET)
}

function decode (req, res, next) {
    verifyJwt({secret: getSecret})(req, res, next)
}

module.exports = {
    issue, 
    createToken,
    decode
}