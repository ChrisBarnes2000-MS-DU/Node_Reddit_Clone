// Require Libraries
const express = require('express');

// App Setup
const app = express();
app.use(express.static('public'));

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Routes
app.get('/', (req, res) => {
    // res.send("Hello Word")
    // .then(response => {
        // store the gifs we get back from the search
        // const gifs = response;
        const gifs = 'Redit'
        // pass the gifs as an object into the home page
    res.render('index', { gifs })
    // }).catch(console.error);
});

// Start Server
app.listen(3000, () => {
    console.log('redit tutorial listening on port localhost:3000!');
});