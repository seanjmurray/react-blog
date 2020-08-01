import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
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
  // eslint-disable-next-line
const posts = data.map((obj,i) => {
    if (i < 5) {
      return (
        <div className="post" key={i}>
          <h3>{obj.title}</h3>
          <h5>{obj.time.toString().slice(0, 10)}</h5>
          <Link to={`/blog/${obj.slug}`} >Read more ...</Link>
        </div>
      )
    }
  })

  const Featured = () => {
    return (
      <article>
        <h3>{data[0].title}</h3>
        <p>{data[0].body.substring(0, 255)}. . .</p>
        <Link to={`/blog/${data[0].slug}`} >Read more ...</Link>
      </article>
    )
  }

  return (
    <section className="flex main">
      <div className="posts">
        <h2>Recent Posts</h2>
        {posts}
      </div>
      <div className="featured">
        <h2>Featured</h2>
        {data.length > 0
          ? <Featured />
          : null
        }
      </div>
    </section>
  )
}

export default Home
