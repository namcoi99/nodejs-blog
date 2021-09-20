class SignInController {
    // [GET] /signin
    index(req, res) {
        res.render('signin')
    }
}

module.exports = new SignInController;
