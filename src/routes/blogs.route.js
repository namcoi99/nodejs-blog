const express = require('express')
const router = express.Router();
const blogsController = require('../app/controllers/BlogsController')

router.use('/', blogsController.index)

module.exports = router;
