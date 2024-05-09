const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const app = express();
// Set the view engine to ejs
app.set('view engine', 'ejs');
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
dotenv.config();

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

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        body: '<h1>Welcome to the Home Page</h1>'
    });
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
