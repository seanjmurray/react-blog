import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';


export default (props) => {
  const [loading, isLoading] = useState(false)
  const [data , setData] = useState({});
  useEffect(() => {
    const { match: { params } } = props;
    isLoading(true)
    const fetchData = async () => {
     const dbData =  await axios(`/post/${params.slug}`)
        setData(dbData.data);
        isLoading(false)
      }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return(
    <section>
      {loading ?
      <h1>Loading . . .</h1> :
      <div>
      <h1>{data.title}</h1>
        <h4>Posted on: {data.time}</h4>
        <Markdown source={data.body} escapeHtml={false} />
        </div>
      }
    </section>
  )
  }
