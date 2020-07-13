import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';


export default (props) => {
  const [loading, isLoading] = useState(false)
  const [data , setData] = useState({});
  const { match: { params } } = props;
  useEffect(() => {
    isLoading(true)
    const fetchData = () => {
      axios(`/post/${params.id}`)
      .then(dbData => {
        isLoading(false)
        setData(dbData.data);
      })
    }
    fetchData();
    console.log(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const Post = () => {
    return(
      <div>
        <h1>{data.title}</h1>
        <h4>Posted on: {data.time}</h4>
        <Markdown source={data.body} escapeHtml={false} />
      </div>
    )
  }
  return(
    <section>
      {loading ? 
      <h1>Loading . . .</h1> :
      <Post />}
    </section>
  )
  }
