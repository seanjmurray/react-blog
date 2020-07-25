import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './login'
import LogoutButton from './logout'
import './css/header.css'

const Header = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/posts">Posts </Link>
      {/* <Link to="/about">About </Link> */}
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </nav>
  )
}

export default Header
