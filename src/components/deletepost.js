import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

const DeleteButton = (props) => {
  const { user } = useAuth0()
  const { sub } = user
  const [deleted, isDeleted] = useState(false)
  const beGone = () => {
    axios.delete(`/post/${props.post_id}`, {
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

export default withAuthenticationRequired(DeleteButton)
