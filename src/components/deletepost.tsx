import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { User } from '@auth0/auth0-react/dist/auth-state'

type Props = {
  postId: string,
  user: User
}

const DeleteButton = ({ postId, user }: Props): JSX.Element => {
  const [deleted, isDeleted] = useState(false)
  const beGone = () => {
    console.log(user)
    axios.delete(`/post/${postId}`, {
      data: {
        user: user.user.sub
      }
    })
    isDeleted(true)
  }
  return (
    <div>
      {deleted
        ? <h3>Post Deleted</h3>
        : <button onClick={beGone}>Delete Post</button>
      }
    </div>
  )
}

DeleteButton.propTypes = {
  post_id: PropTypes.string
}

export default DeleteButton
