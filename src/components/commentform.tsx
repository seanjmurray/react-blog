import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { User } from '@auth0/auth0-react/dist/auth-state'

type Props = {
  post: {
    _id?: string
  },
  user: User
}

const CommentForm = ({ post, user }: Props): JSX.Element => {
  const [comment, isComment] = useState('')

  const postComment = () => {
    axios.post(`/comment/${post._id}`, {
      data: {
        post_id: post._id,
        comment: comment,
        posted_by: user.user.sub,
        picture: user.user.picture
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
