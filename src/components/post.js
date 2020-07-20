import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';
import { useAuth0 } from '@auth0/auth0-react';
import './css/post.css';

export default (props) => {
  const [loading, isLoading] = useState(false)
  const [data , setData] = useState({});
  const [comment, isComment] = useState('');
  const [comments , postComments] = useState([])
  const user = useAuth0();
  useEffect(() => {
    const { match: { params } } = props;
    isLoading(true)
    const fetchData = () => {
      axios(`/post/${params.slug}`)
      .then(dbData => {
        setData(dbData.data);
        isLoading(false);
        axios(`/comment/${dbData.data._id}`)
      .then(dbData => {
        postComments(dbData.data.reverse())
      })
      })
      }
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  const getComments = comments.map((obj,i) => {
    return (
    <div className="comment" key={i}>
      <img src={obj.picture} alt="Profile" className="profile" />
      <Markdown source={obj.comment} escapeHtml={false} />
    </div>
  )})

  const postComment = () => {
    axios.post(`/comment/${data._id}`,{
      data: {
        post_id: data._id,
        comment: comment,
        posted_by: user.user.sub,
        picture: user.user.picture
      }
    })
    isComment('');
  }
  return(
    <section>
      {loading ?
      <h1>Loading . . .</h1> :
      <div>

      <div>
      <h1>{data.title}</h1>
        <h4>Posted on: {data.time}</h4>
        <Markdown source={data.body} escapeHtml={false} />
        </div>
        {user.isAuthenticated ? 
    <div className="comment-section">
      <p>Comments support markdown</p>
      <form className="comment-form" onSubmit={postComment}>
        <textarea value={comment} onChange={e => isComment(e.target.value)} placeholder="Post Comment" />
        <button>Post Comment</button>
      </form>
  <div>{getComments}</div>
    </div> :
    <h3>Please log in to comment</h3>
  }
      </div>
      }
    </section>
  )
  }
