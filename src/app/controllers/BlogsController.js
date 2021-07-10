class BlogsController {
    // [GET] /blogs
    index(req, res) {
        res.render('blogs')
    }
}

module.exports = new BlogsController;
