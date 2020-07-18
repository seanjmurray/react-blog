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
  <div key={i}>
    <h2>{obj.title}</h2>
    <h5>{obj.time}</h5>
    <Link to={`/${obj.slug}`} >Read more ...</Link>
  </div>
  )}})

   
 
  return(
    <section>
      <div className="left">{posts}</div>
      <div className="right">
        <div className="r-top">right top</div>
        <div className="r-bottom">right bottom</div>
      </div>
    </section>
  )
}