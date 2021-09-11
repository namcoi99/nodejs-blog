const express = require('express')
const router = express.Router();
const blogsController = require('../app/controllers/BlogsController')

router.get('/', blogsController.index)

module.exports = router;
