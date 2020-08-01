import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import CommentForm from './commentform'
import Comments from './comment'

const CommentSection = (props) => {
  const [comments, postComments] = useState([])

  useEffect(() => {
    const fetchData = () => {
      axios(`/comment/${props.post._id}`)
        .then(dbData => {
          postComments(dbData.data.reverse())
        })
    }
    fetchData()
  }, [props.post, postComments])
  return (
    <section className="comment-section">
      <CommentForm post={props.post} user={props.user} />
      <Comments comments={comments} />
    </section>
  )
}

CommentSection.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object
}

export default CommentSection
