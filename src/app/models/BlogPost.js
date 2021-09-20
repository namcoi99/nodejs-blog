const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Post = new Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    slug: 'title',
    unique: true
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', Post);
