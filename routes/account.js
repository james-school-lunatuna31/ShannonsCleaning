/** REQUIRE **/
const express = require('express');
const router = new express.Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/profile', requiresAuth(), function (req, res) {
    res.render('partials/accounts/profile', {
        userProfile: JSON.stringify(req.oidc.user, null, 2),
        title: 'Profile page'
    });
});

/** ERROR HANDLING **/

module.exports = router;
