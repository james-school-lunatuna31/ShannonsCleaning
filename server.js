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
    baseURL: 'http://localhost:5301',
    clientID: '28CFi7P1HGAUZERen9WE5wJznUo8IS9L',
    issuerBaseURL: 'https://dev-zc5gnsu13c4qqoz2.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

const indexRouter = require('./routes/index');

const setAuthStatus = require('./Tools/authTools');

app.use(setAuthStatus);
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
