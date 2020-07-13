import React, { useState, useEffect } from 'react';
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
  return (<div key={i}>
    <h2>{obj.title}</h2>
    <h5>{obj.time}</h5>
    <Markdown source={obj.body}  escapeHtml={false} />
    <hr/>
  </div>
  )})
  return(
    <section>
      {loading ? 
      <h1>Loading . . .</h1> :
      <div>{posts}</div>
      }
    </section>
  )
}