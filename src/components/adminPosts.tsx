import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './deletepost'
import { User } from '@auth0/auth0-react/dist/auth-state'

type Props = {
  posts: {
    _id: string,
    title: string,
    slug: string
  }[],
  user: User
}

const MyPosts = ({ posts, user }: Props): JSX.Element => {
  const adminPosts = posts.map(post => {
    return (
      posts.length > 1
        ? <div className="post">
          <h3>{post.title}</h3>
          <DeleteButton user={user} postId={post._id} />
          <Link to={`/edit/${post.slug}`}>Edit Post</Link>
        </div>
        : null
    )
  })
  return <>{ adminPosts }</>
}

export default MyPosts
