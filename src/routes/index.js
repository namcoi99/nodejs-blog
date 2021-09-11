const blogsRouter = require('./blogs')
const siteRouter = require('./site')
const signinRouter = require('./signin')

function route(app) {
    app.use('/blogs', blogsRouter)
    app.use('/signin', signinRouter)

    app.use('/', siteRouter)

}

module.exports = route;
