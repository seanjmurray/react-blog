import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const CommentForm = (props) => {
  const [comment, isComment] = useState('')

  const postComment = (e) => {
    // e.preventDefault()
    console.log(props.post)
    console.log(props.user)
    axios.post(`/comment/${props.post._id}`, {
      data: {
        post_id: props.post._id,
        comment: comment,
        posted_by: props.user.user.sub,
        picture: props.user.user.picture
      }
    })
    isComment('')
  }
  return (
    <form className="comment-form" onSubmit={postComment}>
      <p>Comments support markdown</p>
      <textarea value={comment} onChange={e => isComment(e.target.value)} placeholder="Post Comment" />
      <button>Post Comment</button>
    </form>
  )
}

CommentForm.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object
}

export default CommentForm
