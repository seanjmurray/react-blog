import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'react-markdown'
import './css/posts.css'

const Posts = () => {
  const [loading, isLoading] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    isLoading(true)
    const fetchData = () => {
      axios('/home')
        .then(dbData => {
          isLoading(false)
          setData(dbData.data)
        })
    }
    fetchData()
  }, [])
  const posts = data.map((obj, i) => {
    return (
      <div className="post" key={i}>
        <Link to={`/blog/${obj.slug}`} ><h3>{obj.title}</h3></Link>
        <h5>{obj.time.toString().slice(0, 10)}</h5>
        <Markdown source={obj.body} escapeHtml={false} />
      </div>
    )
  })
  return (
    <section className="main">
      {loading
        ? <h1>Loading . . .</h1>
        : <div className="posts-page">{posts}</div>
      }
    </section>
  )
}
export default Posts
