//=================================INITIAL=================================\\
require('dotenv').config();
const express = require('express');

// Set db
require('./data/reddit-db');

const app = express();
const PORT = process.env.PORT;

const exphbs = require('express-handlebars').create({extname: 'hbs'});
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');



//=================================MIDDLEWARE=================================\\

// Handlebars
app.engine('hbs', exphbs.engine)
app.set('view engine', 'hbs');

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Add after body parser initialization!
app.use(expressValidator());



//=================================CONTROLLERS=================================\\

//Posts App
require('./controllers/posts.js')(app);



//=================================LISTEN=================================\\
// Start Server
app.listen(PORT, () => {
    console.log(`Redit tutorial listening on port localhost:${PORT}!`);
});

//To run tests export our app variables that mocha needs in order to successfully run our tests.
module.exports = app;