class SiteController {
    // [GET] /blogs
    index(req, res) {
        res.render('home')
    }
}

module.exports = new SiteController;
