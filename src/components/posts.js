import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Markdown from 'react-markdown';


export default () => {
  const [loading, isLoading] = useState(false)
  const [data , setData] = useState([]);
  useEffect(() => {
    isLoading(true)
    const fetchData = () => {
    axios('/home')
    .then(dbData => {
      isLoading(false)
      setData(dbData.data);
    })
  }
  fetchData();
}, [])
const posts = data.map((obj,i) => {
  return (
  <div className="post" key={i}>
    <Link to={`/${obj.slug}`} ><h2>{obj.title}</h2></Link>
    <h5>{obj.time}</h5>
    <Markdown source={obj.body}  escapeHtml={false} />
  </div>
  )})
  return(
    <section>
      {loading ? 
      <h1>Loading . . .</h1> :
      <div className="posts">{posts}</div>
      }
    </section>
  )
}