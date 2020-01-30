// Require Libraries
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;

// Set db
require('./data/reddit-db');

// App Setup
const app = express();
app.use(express.static('public'));

// Controller Apps
require('./controllers/posts.js')(app);


// Middleware
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use Handle Bars 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Add after body parser initialization!
app.use(expressValidator());




// Routes
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/posts/new', (req, res) => {
    res.render('posts-new')
});



// Start Server
app.listen(PORT, () => {
    console.log(`Redit tutorial listening on port localhost:${PORT}!`);
});