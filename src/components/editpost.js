import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const EditPost = (props) => {
  const user = useAuth0()
  const [title, editTitle] = useState('')
  const [body, editBody] = useState('')
  const [post, editPost] = useState({})
  useEffect(() => {
    const { match: { params } } = props
    const fetchData = () => {
      axios(`/post/${params.slug}`)
        .then(dbData => {
          editPost(dbData.data)
          editTitle(dbData.data.title)
          editBody(dbData.data.body)
        })
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const postEdits = (event) => {
    event.preventDefault()
    axios({
      method: 'patch',
      url: `/post/${post._id}`,
      data: {
        user: user.user.sub,
        title: title,
        body: body
      }
    })
  }
  const ItsMe = () => {
    if (user.isLoading) {
      return <h1>Loading</h1>
    } else {
      return user.user.sub === process.env.REACT_APP_SUB
        ? <div>
          <form onSubmit={postEdits}>
            <input type="text" value={title} onChange={e => editTitle(e.target.value)} />
            <textarea placeholder="Post Body" rows="60" name="body" value={body} onChange={e => editBody(e.target.value)} ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        : <Redirect to="/" />
    }
  }
  return (
    <ItsMe />
  )
}

EditPost.propTypes = {
  match: PropTypes.string
}

export default EditPost
