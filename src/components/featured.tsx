import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

type FeaturedProps = {
  post: {title: string, body: string, slug: string}[]
}

const Featured = ({ post }: FeaturedProps) => {
  return (
    <article>
      <h3>{post[0].title}</h3>
      <p>{post[0].body.substring(0, 255)}. . .</p>
      <Link to={`/blog/${post[0].slug}`} >Read more ...</Link>
    </article>
  )
}

Featured.propTypes = {
  post: PropTypes.array
}

export default Featured
