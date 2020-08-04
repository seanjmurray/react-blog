import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import axios from 'axios'
import Markdown from 'react-markdown'
import './css/posts.css'

type posts = {
  arr:{
    slug?: string,
    title?: string,
    time?: Date,
    body?: string
    }[]
}

const Posts = (): JSX.Element => {
  const [loading, isLoading] = useState(false)
  const [posts, getPosts] = useState([])
  useEffect(() => {
    isLoading(true)
    const fetchData = () => {
      axios('/home')
        .then(dbData => {
          isLoading(false)
          getPosts(dbData.data)
        })
    }
    fetchData()
  }, [])
  const BlogPosts = ({ arr }: posts): JSX.Element => {
    const postArr = arr.map((obj, i) => {
      return (
        <div className="post" key={i}>
          <Link to={`/blog/${obj.slug}`} ><h3>{obj.title}</h3></Link>
          <Moment format="LL" date={obj.time} />
          <Markdown source={obj.body} escapeHtml={false} />
        </div>
      )
    })
    return <>{postArr}</>
  }
  return (
    <section className="main">
      {loading
        ? <h1>Loading . . .</h1>
        : <div className="posts-page">
          <BlogPosts arr={posts} />
        </div>
      }
    </section>
  )
}
export default Posts
