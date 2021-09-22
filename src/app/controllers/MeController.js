const Post = require('../models/BlogPost');
const { multipleMongooseToObject } = require('../../util/mongoose')
class MeController {

    // [GET] /me/posts
    posts(req, res, next) {
        Post.find({})
            .then(posts => res.render('me/posts', {
                posts: multipleMongooseToObject(posts)
            }))
            .catch(err => next(err))

    }
}

module.exports = new MeController;
