const Post = require('../models/BlogPost');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Post.find({})
            .then(posts => {
                res.render('home', {
                    posts: multipleMongooseToObject(posts),
                })
            })
            .catch(err => next(err));
    }
}

module.exports = new SiteController;
