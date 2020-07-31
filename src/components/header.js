import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './login'
import LogoutButton from './logout'
import './css/header.css'

const Header = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <nav>
      <BrowserRouter>
        <Link to="/">Home </Link>
        <Link to="/posts">Posts </Link>
        <a href="https://www.seanjmurray.tech">Portfolio </a>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </BrowserRouter>
    </nav>
  )
}

export default Header
