/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const logger = require('morgan')
const mongoose = require('mongoose')
const slugify = require('slugify')
const THE_SECRET = process.env.THE_SECRET
const dbURL = process.env.MONGODB_URI
const PORT = process.env.PORT
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '..', 'build')))
mongoose.set('useFindAndModify', false)
// schema for posts in MongoDB
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  slug: String,
  time: Date
})

// Creating the model to use
const Post = mongoose.model('Post', postSchema)
// schema for comments in Mongo
const commentSchema = new mongoose.Schema({
  post_id: String,
  comment: String,
  posted_by: String,
  picture: String
})
// creating comment model
const Comment = mongoose.model('Comment', commentSchema)
// handles get requests for /home sends array of posts
app.get('/home', (req, res) => {
  Post.find({}).sort({ time: -1 })
    .then(dbData => {
      res.send(dbData)
    })
})

// handles the post for inserting into the database
app.post('/blog', (req, res) => {
  if (req.body.post.sub === THE_SECRET) {
    const newPost = new Post({
      title: req.body.post.title,
      body: req.body.post.body,
      slug: slugify(req.body.post.title.toLowerCase()),
      time: new Date()
    })
    newPost.save()
      .then(() => res.status(200))
      .catch(err => console.error(err))
  } else {
    res.status(403)
  }
})

// Finds post by slug
app.get('/post/:slug', (req, res) => {
  Post.findOne({ slug: req.params.slug })
    .then(dbData => {
      res.send(dbData)
    })
})
// Deletes posts
app.delete('/post/:id', (req, res) => {
  if (req.body.user === THE_SECRET) {
    Post.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200)
      }).catch(err => {
        console.error(err)
        res.status(500)
      })
  } else {
    res.status(403)
  }
})
app.patch('/post/:id', (req, res) => {
  if (req.body.user === THE_SECRET) {
    Post.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        body: req.body.body
      }
    )
      .then(() => {
        res.status(200)
      })
      .catch(err => {
        console.error(err)
        res.status(500)
      })
  }
})
// handles getting post comments
app.get('/comment/:id', (req, res) => {
  Comment.find({ post_id: req.params.id })
    .then(dbData => {
      res.send(dbData)
    })
})
// handles posting comments
app.post('/comment/:id', (req, res) => {
  const newComment = new Comment({
    post_id: req.body.data.post_id,
    comment: req.body.data.comment,
    posted_by: req.body.data.posted_by,
    picture: req.body.data.picture
  })
  newComment.save()
    .then(() => res.status(200))
    .catch(err => console.error(err))
})

// sends react build directory to all other requests
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'))
})

// waits for mongoose to connect before starting server
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`))
  })
  .catch(err => console.error(err))

// I probably should separate these into modules...
