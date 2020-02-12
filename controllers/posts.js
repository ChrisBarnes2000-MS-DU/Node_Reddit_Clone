const Post = require('../models/post.js');

module.exports = app => {
    // INDEX
    app.get('/', (req, res) => {
        Post.find({}).lean().then(posts => {
            res.render("posts-index.hbs", { posts });
        }).catch(err => {
            console.log(err.message);
        });
    });

    //NEW
    app.get("/posts/new", (req, res) => {
        res.render("posts-new.hbs");
    });

    // CREATE
    app.post('/posts/new', (req, res) => {
        console.log(`Body Return: ${req.body}`)
        const post = new Post(req.body);
        post.save((err, post) => {
            console.log(`Error: ${err}`);
            console.log(`Post: ${post}`);
            return res.redirect('/');
        })
    });

    // SHOW one Post
    app.get("/posts/:id", function (req, res) {
        Post.findById(req.params.id).lean().then(post => {
            res.render("posts-show.hbs", { post });
        }).catch(err => {
            console.log(err.message);
        });
    });

    // SUBREDDIT
    app.get("/n/:subreddit", function (req, res) {
        Post.find({ subreddit: req.params.subreddit })
            .lean()
            .then(posts => {
                res.render("posts-index", { posts });
            })
            .catch(err => {
                console.log(err);
            });
    });
};