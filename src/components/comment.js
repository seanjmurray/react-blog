import React from 'react'
import Markdown from 'react-markdown'

const Comments = (props) => {
  const postComments = props.comments.map((obj, i) => {
    return (
      <div className="comment" key={i}>
        <img src={obj.picture} alt="Profile" className="profile" />
        <Markdown source={obj.comment} escapeHtml={false} />
      </div>
    )
  })
  return postComments
}

export default Comments
