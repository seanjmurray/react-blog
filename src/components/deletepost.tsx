import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  post_id: string
}

const DeleteButton = ({ post_id }: Props) => {
  const { user } = useAuth0()
  const { sub } = user
  const [deleted, isDeleted] = useState(false)
  const beGone = () => {
    axios.delete(`/post/${post_id}`, {
      data: {
        user: sub
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
