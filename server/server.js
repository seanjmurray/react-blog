require('dotenv').config();
const path = require("path");
const express = require("express");
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
const dbURL = process.env.MONGODB_URI;
const PORT = process.env.PORT;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "build")));


const postSchema = new mongoose.Schema({
  title: String,
  email: String,
  body: String,
  time: String
})
const Post = mongoose.model('Post', postSchema)

app.get('/home', (req,res,next) => {
  Post.find()
    .then(dbData => {
      res.send(dbData.reverse())
    })
})
app.post('/blog', (req,res,next) => {
  let newPost = new Post({
    title: req.body.post.title,
    email: req.body.post.email,
    body: req.body.post.body,
    time: req._startTime.toString().slice(0,15)
  })
  newPost.save()
    .then(dbData => console.log(dbData))
    .catch(err => console.error(err))
})
app.get('/post/:id', (req,res,next) => {
  Post.findById(req.params.id)
    .then(dbData => {
      res.send([dbData])
    })
})
app.delete('/post/:id', (req,res,next) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200)
    }).catch(err => {
      console.error(err)
      res.status(500)
    })
})

app.use('*', (req,res,next) => {
  res.sendFile(path.join(__dirname, "..", "build/index.html"))
})

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  })
  .catch(err => console.error(err))