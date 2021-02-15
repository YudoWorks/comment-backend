const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const CommentSchema = new Schema({
  text: String
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;