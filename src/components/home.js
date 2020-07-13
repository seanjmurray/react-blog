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
const posts = data.map((obj,i) => {
  return (<div key={i}>
    <h2>{obj.title}</h2>
    <h5>{obj.time}</h5>
    <Link to={`/post/${obj._id}`} >Read more ...</Link>
  </div>
  )})
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