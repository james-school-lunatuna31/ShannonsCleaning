const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController');

/** DELEGATION **/
accountRoute = require('./account');
router.use('/account', accountRoute);
router.get('/', baseController.loadDefaults);

/** ERROR HANDLING **/
router.use(async (req, res, next) => {
    next({ status: 404, message: 'Sorry, we appear to have lost that page.' });
});

module.exports = router;
