/** REQUIRE **/
const express = require('express');
const profileRoute = require('./profile/profile');
const router = new express.Router();

//base

/** DELEGATION */
router.use('/profile', profileRoute);

/** ERROR HANDLING **/

module.exports = router;
