require('dotenv').config();
const path = require("path");
const express = require("express");
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
const slugify = require('slugify');
const THE_SECRET = process.env.THE_SECRET;
const dbURL = process.env.MONGODB_URI;
const PORT = process.env.PORT;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "build")));
// schema for posts in MongoDB
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  user: String,
  slug: String,
  time: String
})
// Creating the model to use
const Post = mongoose.model('Post', postSchema)

//handles get requests for /home sends array of posts
app.get('/home', (req,res,next) => {
  Post.find()
    .then(dbData => {
      res.send(dbData.reverse())
    })
})

//handles the post for inserting into the database
app.post('/blog', (req,res,next) => {
  if(req.body.post.sub === THE_SECRET){
    let newPost = new Post({
      title: req.body.post.title,
      body: req.body.post.body,
      user: req.body.post.sub,
      slug: slugify(req.body.post.title.toLowerCase()),
      time: req._startTime.toString().slice(0,15)
    })
    newPost.save()
      .then(() => res.status(200))
      .catch(err => console.error(err))
  }else {
    res.status(403)
  }
})

// Finds post by slug
app.get('/post/:slug', (req,res,next) => {
  Post.findOne({slug: req.params.slug})
    .then(dbData => {
      res.send(dbData)
    })
})
// Deletes posts
app.delete('/post/:id', (req,res,next) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200)
    }).catch(err => {
      console.error(err)
      res.status(500)
    })
})

// sends react build directory to all other requests
app.use('*', (req,res,next) => {
  res.sendFile(path.join(__dirname, "..", "build/index.html"))
})

// waits for mongoose to connect before starting server
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  })
  .catch(err => console.error(err))