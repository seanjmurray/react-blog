import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Feed from './feed'
import Featured from './featured'
import './css/home.css'


const Home = () => {
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

  return (
    <section className="flex main">
      <div className="posts">
        <h2>Recent Posts</h2>
        <Feed posts={data} />
      </div>
      <div className="featured">
        <h2>Featured</h2>
        {data.length > 0
          ? <Featured post={data} />
          : null
        }
      </div>
    </section>
  )
}

export default Home
