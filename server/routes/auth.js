var router = require('express').Router()

var {userExists, createUser} = require('../db/users')

var token = require('../auth/token')

router.post('/register', register)
// router.post('/register', register, token.issue) - need to update the token.js file in the auth folder before this line will work.

function register (req, res, next) {
    const {name, password} = req.body

    if(!name && !password) {        //this section of code below will give an error message specific to what is missing.
        res.status(400).send("I need a username or password")
    } else {
        userExists(name, req.app.get('db'))
        .then(exists => {
            if (exists) return res.status(400).send({message:"User exists"})
            createUser(name, password, req.app.get('db'))
              .then(() => next())
        })
        .catch(err => res.status(500).send({message: err.message}))
    }
}

    


    router.post('/login', token.issue)

    module.exports = router