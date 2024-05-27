/** REQUIRE **/
//const accountModel = require('../models/AccountModel');

/** FUNCTIONS **/
const accountsController = {};

accountsController.loadTest = function (req, res) {
    res.render('partials/accounts/login', { title: 'Login Page' });
};

accountsController.loadAdminTest = function (req, res) {
    res.render('partials/accounts/login', { title: 'Admin Login Page' });
};

// accountsController.createUser = function (req, res) {
//     const user = {
//         email: req.body.email,
//         password: req.body.password,
//         nickname: req.body.nickname
//     };
//     console.log(user.email, user.password, user.nickname);
//     accountModel.create(user, function (err) {
//         if (err) {
//             // console.error('Error creating user:', err); // Log the error
//             return res.status(500).json({ error: 'Failed to create user' });
//         }
//         return res.status(201).json({ message: 'User created successfully' });
//     });
// };

module.exports = accountsController;
