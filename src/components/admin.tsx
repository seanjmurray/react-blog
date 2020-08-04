import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import Compose from './compose'
import MyPosts from './adminPosts'

const Admin = (): JSX.Element => {
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
      <MyPosts user={user} posts={data}/>
    </section>
  )
}

export default Admin
