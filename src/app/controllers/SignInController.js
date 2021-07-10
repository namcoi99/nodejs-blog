class SignInController {
    // [GET] /blogs
    index(req, res) {
        res.render('signin')
    }
}

module.exports = new SignInController;
