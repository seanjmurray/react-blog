import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import CommentForm from './commentform'
import Comments from './comment'
import { User } from '@auth0/auth0-react/dist/auth-state'

type Props = {
  post: {
    _id?: string
  },
  user: User
}

const CommentSection = ({ post, user }: Props) => {
  const [comments, postComments] = useState([])

  useEffect(() => {
    const fetchData = () => {
      axios(`/comment/${post._id}`)
        .then(dbData => {
          postComments(dbData.data.reverse())
        })
    }
    fetchData()
  }, [post, postComments])
  return (
    <section className="comment-section">
      <CommentForm post={post} user={user} />
      <Comments comments={comments} />
    </section>
  )
}

CommentSection.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object
}

export default CommentSection
