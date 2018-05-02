exports.seed = (knex, Promise) => {
    return knex('Users').del()
    .then(function() {
        return knex('Users').insert([
            {name: 'Ross',
            hash: '$2b$12$uYwE0raHZQW2pXjaG8nt3.knKB.NzqPrW7R3SssV9vfLe9Da5QIDG'},
            {name: 'Steve',
            hash: '$2b$12$uYwE0raHZQW2pXjaG8nt3.knKB.NzqPrW7R3SssV9vfLe9Da5QIDG'},
            {name: 'Engie',
            hash: '$2b$12$uYwE0raHZQW2pXjaG8nt3.knKB.NzqPrW7R3SssV9vfLe9Da5QIDG'}
        ])
    })
}