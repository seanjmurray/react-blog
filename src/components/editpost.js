import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'react-markdown'
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
        ? <h1>Edit Post</h1>
        : <Redirect to="/" />
    }
  }
  return (
    <section>
      <ItsMe />
      <form onSubmit={postEdits}>
        <input type="text" name="title" value={title} onChange={event => editTitle(event.target.value)} />
        <textarea rows="60" name="body" value={body} onChange={event => editBody(event.target.value)} ></textarea>
        <button type="submit">Submit</button>
      </form>
      <h2>Preview</h2>
      <Markdown source={body} />
    </section>
  )
}

EditPost.propTypes = {
  match: PropTypes.string
}

export default EditPost
