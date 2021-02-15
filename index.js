const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./Comment');
const cors = require('cors');

const app = express();
const comments = express.Router();

app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use('/comments', comments)

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

comments.post('/', (req, res) => {
  const newComment = Comment( req.body );
  newComment.save().then(() => res.json('successfully save new comment'))
})

comments.get('/', (req, res) => {
  Comment.find().then(result => res.send(result))
})

comments.get('/', (req, res) => {
  Comment.find().then(result => res.send(result))
})

comments.delete('/:id', (req, res) => {
  Comment.deleteOne({ _id: req.params.id }).then(result => res.send(result));
})

app.listen(3001, () => console.log('Listening in PORT 3001'));
