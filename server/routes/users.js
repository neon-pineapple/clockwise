const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV]);


router.route('/')
    .get((req, res) => {
        knex.select().from('users')
            .then((users) => {
                res.json(users);
            });
    })
    .post((req, res) => {
        res.json({message: 'This is the post response'});
    });

router.route('/:userId')
    .get((req, res) => {
        res.json({message: 'Get a single user'});
    })
    .put((req, res) => {
        res.json({message: 'Update a user'});
    });

/* GET user list. Unprotected route. */
// router.get('/', (req, res) => {
//     knex.select().from('users')
//         .then((users) => {
//             res.json(users);
//         });
// });

module.exports = router;