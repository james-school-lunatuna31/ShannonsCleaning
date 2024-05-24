/** REQUIRE **/

/** FUNCTIONS **/
const accountsController = {};

accountsController.loadTest = function (req, res) {
    res.render('partials/accounts/login', { title: 'Login Page' });
};

accountsController.loadAdminTest = function (req, res) {
    res.render('partials/accounts/login', { title: 'Admin Login Page' });
};

module.exports = accountsController;
