const postsRouter = require('./posts')
const siteRouter = require('./site')
const signinRouter = require('./signin')

function route(app) {
    app.use('/posts', postsRouter)
    app.use('/signin', signinRouter)

    app.use('/', siteRouter)

}

module.exports = route;
