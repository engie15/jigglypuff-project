exports.seeds = (knex, Promise) => {
    return knex('Users').del()
    .then(function() {
        return knex('Users').insert([
            {name: 'Rosie',
            hash: 'squirtle'},
            {name: 'Steve',
            hash: 'bulbasaur'},
            {name: 'Engie',
            hash: 'pikachu'}
        ])
    })
}