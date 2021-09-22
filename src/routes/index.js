const postsRouter = require('./posts')
const siteRouter = require('./site')
const signinRouter = require('./signin')
const meRouter = require('./me')

function route(app) {
    app.use('/posts', postsRouter)
    app.use('/signin', signinRouter)
    app.use('/me', meRouter)

    app.use('/', siteRouter)

}

module.exports = route;
