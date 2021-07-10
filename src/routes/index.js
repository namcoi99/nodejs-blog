const blogsRouter = require('./blogs.route')
const siteRouter = require('./site.route')
const signinRouter = require('./signin.route')

function route(app) {
    app.use('/blogs', blogsRouter)
    app.get('/signin', signinRouter)

    app.get('/', siteRouter)

}

module.exports = route;
