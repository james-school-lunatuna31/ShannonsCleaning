function setAuthStatus(req, res, next) {
    res.locals.isAuthenticated = req.oidc.isAuthenticated();
    next();
}

module.exports = setAuthStatus;
