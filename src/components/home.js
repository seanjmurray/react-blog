import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/home.css';

export default () => {
  const [data , setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
    axios('/home')
      .then(dbData => {
        setData(dbData.data);
      })
  }
  fetchData();
}, [])
// eslint-disable-next-line
const posts = data.map((obj,i) => {
  if(i < 5){
  return (
  <div className="post" key={i}>
    <h2>{obj.title}</h2>
    <h5>{obj.time}</h5>
    <Link to={`/${obj.slug}`} >Read more ...</Link>
  </div>
  )}})

   
 
  return(
    <section className="flex">
      <div className="posts">
        <h3>Recent Posts</h3>
        {posts}
        </div>
        <div className="featured">
          <h3>Featured</h3>
          <article>
            {posts[0]}
          </article>
        </div>
    </section>
  )
}