import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import './css/compose.css';
import axios from 'axios';
import Markdown from 'react-markdown';

const Compose =  () => {
  const [title, postTitle] = useState('');
  const [body, postBody] = useState('');
  const [posted, isPosted] = useState(false);
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
    isPosted(true);
}

return(
  <section>
  {posted ?
    <Redirect to='/' /> :
  <div>
  <form onSubmit={postBlog}>
    <input placeholder="Post Title" name="title"  value={title} onChange={event => postTitle(event.target.value)} />
   <textarea placeholder="Post Body" rows="10" name="body" value={body} onChange={event => postBody(event.target.value)} />
       <button type="submit">Submit</button>
  </form>
   <h2>Preview</h2>
  <Markdown source={body} />
  </div>
  }
  </section>
  )
}
export default Compose;