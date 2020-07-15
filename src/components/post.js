import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Markdown from 'react-markdown';

export default (props) => {
  const [loading, isLoading] = useState(false)
  const [data , setData] = useState({});
  const [edit, showEdit] = useState(false)
  const [deleted, isDeleted] = useState(false)
  const { match: { params } } = props;
  useEffect(() => {
    isLoading(true)
    const fetchData = () => {
      axios(`/post/${params.id}`)
      .then(dbData => {
        isLoading(false)
        setData(dbData.data[0]);
      })
    }
    fetchData();
    console.log(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const deletePost = () => {
    isDeleted(true)
    axios.delete(`/post/${params.id}`)
  }
  const Post = () => {
    return(
      <div>
        <button onClick={deletePost} >Delete Post</button>
        <button onClick={showEdit(true)} >Edit Post</button>
        <h1>{data.title}</h1>
        <h4>Posted on: {data.time}</h4>
        <Markdown source={data.body} escapeHtml={false} />
      </div>
    )
  }
  return(
    <section>
      {deleted ?
      <Redirect to="/" /> :
      <Post />}
         
    </section>
  )
  }
