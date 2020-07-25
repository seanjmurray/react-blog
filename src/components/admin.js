import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import DeleteButton from './deletepost'
import Compose from './compose'

const Admin = () => {
  const user = useAuth0()
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = () => {
      axios('/home')
        .then(dbData => {
          setData(dbData.data)
        })
    }
    fetchData()
  }, [])
  const myPosts = data.map(post => {
    return (
      data.length > 1
        ? <div className="post">
          <h3>{post.title}</h3>
          <DeleteButton post_id={post._id} />
          <button>Edit Post</button>
        </div>
        : null
    )
  })
  const ItsMe = () => {
    if (user.isLoading) {
      return <h1>Loading</h1>
    } else {
      return user.user.sub === process.env.REACT_APP_SUB
        ? <Compose />
        : <Redirect to="/" />
    }
  }

  return (
    <section>
      <h1>Admin</h1>
      <ItsMe />
      <div>{myPosts}</div>
    </section>
  )
}

export default Admin
