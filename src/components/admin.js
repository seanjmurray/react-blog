import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Markdown from 'react-markdown';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login';
import LogoutButton from './logout';
import Compose from './compose';

export default () => {
const user = useAuth0();
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

  const ItsMe = () => {
    if(user.isLoading){
      return <h1>Loading</h1>;
    }else{
    return user.user.sub === process.env.REACT_APP_SUB ?
    <section>
      <LogoutButton />
      <Compose />
    </section> :
    <section>
      <LoginButton />
    </section>
    }
}

return (
  <section>
    <h1>Admin</h1>
    <ItsMe />
  </section>
)

}