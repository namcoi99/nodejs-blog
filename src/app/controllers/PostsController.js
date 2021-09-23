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
                next(err)
            });
    }

    // [GET] /posts/:id/edit
    edit(req, res, next) {
        Post.findById(req.params.id)
            .then(post => res.render('posts/edit', {
                post: mongooseToObject(post)
            }))
            .catch(err => next(err))
    }

    // [PUT] /posts/:id
    update(req, res, next) {
        Post.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/posts'))
            .catch(err => next(err))
    }

    // [DELETE] /posts/:id
    delete(req, res, next) {
        Post.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(err => next(err))
    }
}

module.exports = new PostsController;
