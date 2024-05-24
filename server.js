const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const app = express();
// Set the view engine to ejs
app.set('view engine', 'ejs');
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
dotenv.config();

app.set('layout', 'layouts/layout');

// PostgreSQL connection setup
// eslint-disable-next-line
const pool = new Pool({
    user: 'yourUsername',
    host: 'localhost',
    database: 'yourDatabase',
    password: 'yourPassword',
    port: 5432
});

// Middleware to parse JSON bodies
app.use(express.json());

const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
    res.locals.user = req.oidc.user;
    next();
});

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

//error handling

// Error handling middleware

/* eslint-disable-next-line no-unused-vars */
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).render('404', {
            title: 'Page Not Found',
            message: err.message
        });
    } else {
        res.status(err.status || 500).send(err.message);
    }
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
