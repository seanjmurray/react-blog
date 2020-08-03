import React from 'react'
import Markdown from 'react-markdown'

type CommentProps = {
  comments: {
    picture: string,
    comment: string
  }[]
}

const Comments = ({ comments }: CommentProps) => {
  const postComments = comments.map((obj, i) => {
    return (
      <div className="comment" key={i}>
        <img src={obj.picture} alt="Profile" className="profile" />
        <Markdown source={obj.comment} escapeHtml={false} />
      </div>
    )
  })
  return (
    <>{ postComments }</>
  )
}

export default Comments
