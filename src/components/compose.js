import React, { useState } from 'react';
import './css/compose.css';
import axios from 'axios';
import Markdown from 'react-markdown';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

const Compose =  () => {
  const [title, postTitle] = useState('');
  const [body, postBody] = useState('');
  const { user } = useAuth0();
  const { sub } = user;
  const postBlog = (event) => {
    event.preventDefault();
    console.log(event);
  axios({
    method: 'POST',
    url: '/blog',
    data: {
      post: {title,sub,body}
    }
  })
  postTitle('')
  postBody('')
}

return(
  <section>
  <form onSubmit={postBlog}>
    <input placeholder="Post Title" name="title"  value={title} onChange={event => postTitle(event.target.value)} />
   <textarea placeholder="Post Body" rows="60" name="body" value={body} onChange={event => postBody(event.target.value)} ></textarea>
       <button type="submit">Submit</button>
  </form>
  <div className="preview">
   <h2>Preview</h2>
  <Markdown source={body} />
  </div>
  </section>
  )
}
export default withAuthenticationRequired(Compose);