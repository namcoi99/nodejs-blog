const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect();

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// Thêm middleware xử lý dữ liệu từ form html submit lên url, nếu không có middleware này thì req.body sẽ là undefined
app.use(express.urlencoded({
    extended: true
}))
// Xử lý dữ liệu được gửi lên bằng các thư viện như fetch, axios, XMLHttpRequest
app.use(express.json())

// Override HTTP request
app.use(methodOverride('_method'))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a + b,
    }
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app)


app.listen(port, () => console.log(`App is listening at http://localhost:${port}`))