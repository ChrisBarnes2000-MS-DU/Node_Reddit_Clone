const Post = require('../models/post.js');

module.exports = app => {
    // INDEX
    app.get("/", (req, res) => {
        const currentUser = req.user;

        Post.find({})
            .lean()
            .then(posts => {
                res.render("posts-index", { posts, currentUser });
            })
            .catch(err => {
                console.log(err.message);
            });
    });

    //NEW
    app.get("/posts/new", (req, res) => {
        const currentUser = req.user;
        res.render("posts-new.hbs", { currentUser });
    });

    // CREATE
    app.post("/posts/new", (req, res) => {
        if (req.user) {
            const post = new Post(req.body);

            post.save(function (err, post) {
                return res.redirect('/');
            });
        } else {
            return res.status(401); // UNAUTHORIZED
        }
    });

    // SHOW one Post
    app.get("/posts/:id", (req, res) => {
        // LOOK UP THE POST
        Post.findById(req.params.id).populate('comments').lean().then((post) => {
            res.render('posts-show', { post, currentUser })
        }).catch((err) => {
            console.log(err.message)
        })
    });

    // SUBREDDIT
    app.get("/n/:subreddit", (req, res) => {
        Post.find({ subreddit: req.params.subreddit })
            .lean()
            .then(posts => {
                res.render("posts-index", { posts, currentUser });
            })
            .catch(err => {
                console.log(err);
            });
    });
};