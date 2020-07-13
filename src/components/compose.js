import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import './css/compose.css';
import axios from 'axios';
import Markdown from 'react-markdown';
export default () => {
  const [title, postTitle] = useState('');
  const [body, postBody] = useState('');
  const [done, posted] = useState(false)
  const postBlog = (event) => {
    event.preventDefault();
    console.log(event);
  axios({
    method: 'POST',
    url: '/blog',
    data: {
      post: {title,body}
    }
  })
  .then(() => {
    posted(true);
    console.log(done)
  })
}
const IsPosted = () => {
  return done ? 
      <Redirect to="/home" /> :
      <span></span>
}
return(
  <section>
  <form onSubmit={postBlog}>
    <input placeholder="Post Title" name="title"  value={title} onChange={event => postTitle(event.target.value)} />
   <textarea placeholder="Post Body" rows="10" name="body" value={body} onChange={event => postBody(event.target.value)} />
       <button onClick={IsPosted} type="submit">Submit</button>
  </form>
   <h2>Preview</h2>
  <Markdown source={body} />
  <IsPosted />
    </section>
  )
}