import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

type FeedProps = {
  posts: {title: string,
    time: Date,
    slug: string
  }[]
}

const Feed = ({ posts }: FeedProps) => {
  const feed = posts.map((obj, i) => {
    if (i < 5) {
      return (
        <div className="post" key={i}>
          <h3>{obj.title}</h3>
          <Moment format="LL" date={obj.time} />
          <br />
          <Link to={`/blog/${obj.slug}`} >Read more ...</Link>
        </div>
      )
    }
  })
  return (
    <>{ feed }</>
  )
}

export default Feed