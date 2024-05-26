const express = require('express');
const baseController = require('../controllers/baseController');
const { requiresAuth } = require('express-openid-connect');
accountRoute = require('./account/account');

const router = express.Router();

//base routing
router.get('/', baseController.loadDefaults);

/** DELEGATION **/

//accounts
router.use('/account', requiresAuth(), accountRoute);

/** ERROR HANDLING **/
router.use(async (req, res, next) => {
    next({ status: 404, message: 'Sorry, we appear to have lost that page.' });
});

module.exports = router;
