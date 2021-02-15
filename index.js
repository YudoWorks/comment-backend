const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./Comment');

const app = express();
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/comment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
  })
  .then( () => {
  console.log('sucessfully'); 
  })
  .catch(err => console.log(err));

app.post('/comments', (req, res) => {
  const newComment = Comment( req.body );
  newComment.save().then(() => res.json('successfully save new comment'))
})

app.get('/comments', (req, res) => {
  Comment.find().then(result => res.send(result))
})

app.listen(3001, () => console.log('Listening in PORT 3001'));
