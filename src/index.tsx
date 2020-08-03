import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain={`${process.env.REACT_APP_DOMAIN}`}
      clientId={`${process.env.REACT_APP_CLIENT}`}
      redirectUri={window.location.origin} >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
