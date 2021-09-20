const Post = require('../models/BlogPost');
const { mongooseToObject } = require('../../util/mongoose')
class PostsController {

    // [GET] /posts/:slug
    show(req, res, next) {
        Post.findOne({ slug: req.params.slug })
            .then(post => {
                res.render('posts/show', {
                    post: mongooseToObject(post)
                })
            })
            .catch(err => next(err));
    }

    // [GET] /posts/create
    create(req, res, next) {
        res.render('posts/create')
    }

    // [POST] /posts/store
    store(req, res, next) {
        const formData = req.body;
        const newPost = new Post(formData);
        newPost.save()
            .then(() => res.redirect(`/`))
            .catch(err => {
                
            });
    }
}

module.exports = new PostsController;
