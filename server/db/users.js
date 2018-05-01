var hash = require('../auth/hash')

const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)



function createUser (name, password, testConn) {
    const db = testConn || connection
    return new Promise ((resolve, reject) => {
        hash.generate(password, (err, hash) => {
            if (err) reject (err)
            db('Users')
            .insert({name: name, hash})
            .then(id => resolve(id))
        })
    })
}

function userExists (name, testConn) {
    console.log({name});
    const db = testConn || connection
    return db('Users')
        .where('name', name)
        .first()
        .then(user => !!user)
}

function getUserByName (name, testConn) {
    const db = testConn || connection
    return db('Users')
    .where('name', name).first()
}

module.exports = {
    createUser, 
    userExists, 
    getUserByName
}