/** REQUIRED */

const dotenv = require('dotenv');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const authHandler = require('./Handlers/authHandler');
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');

/** SETUP FUNCTIONS */

dotenv.config();
const app = express();
app.use(expressLayouts);

app.use(express.json());
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

// Middleware to parse request body

/** MIDDLEWARE */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(authHandler.oAuthConnection);
app.use(authHandler.getAuthStatus);

/** ROUTING */

app.use('/', indexRouter);

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
