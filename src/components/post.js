
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import { useAuth0 } from '@auth0/auth0-react'
import CommentSection from './commentsection'
import './css/post.css'

const Post = (props) => {
  const [loading, isLoading] = useState(false)
  const [data, setData] = useState({})
  const user = useAuth0()

  useEffect(() => {
    const { match: { params } } = props
    isLoading(true)
    const fetchData = () => {
      axios(`/post/${params.slug}`)
        .then(dbData => {
          setData(dbData.data)
          isLoading(false)
        })
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="main">
      {loading
        ? <h1>Loading . . .</h1>
        : <div>
          <div>
            <h1>{data.title}</h1>
            <h4>Posted on: <Moment format="LL" date={data.time} /></h4>
            <Markdown source={data.body} escapeHtml={false} />
          </div>
          {user.isAuthenticated
            ? <CommentSection post={data} user={user} />
            : <h3>Please log in to comment</h3>
          }
        </div>
      }
    </section>
  )
}

Post.propTypes = {
  match: PropTypes.string
}

export default Post
