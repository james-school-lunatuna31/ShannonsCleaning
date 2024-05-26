const { auth } = require('express-openid-connect');
const dotenv = require('dotenv');
dotenv.config();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: 'http://localhost:5301',
    clientID: '28CFi7P1HGAUZERen9WE5wJznUo8IS9L',
    issuerBaseURL: 'https://dev-zc5gnsu13c4qqoz2.us.auth0.com'
};

const oAuthConnection = auth(config);

function setAuthStatus(req, res, next) {
    res.locals.isAuthenticated = req.oidc.isAuthenticated();
    next();
}

module.exports = { oAuthConnection, setAuthStatus };
