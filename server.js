/** REQUIRED */

const dotenv = require('dotenv');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { Pool } = require('pg');
const authHandler = require('./Handlers/authHandler');
const indexRouter = require('./routes/index');

/** SETUP FUNCTIONS */

dotenv.config();
const app = express();
app.use(expressLayouts);
app.use(express.json());
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

/** ROUTING */

app.use('/', indexRouter);

/** MIDDLEWARE */

app.use(authHandler.oAuthConnection);
app.use(authHandler.setAuthStatus);
// PostgreSQL connection setup
// eslint-disable-next-line
const pool = new Pool({
    user: 'yourUsername',
    host: 'localhost',
    database: 'yourDatabase',
    password: 'yourPassword',
    port: 5432
});

/** ERROR HANDLING */

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
