import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

export default () => {
  return(
    <nav>
      <Link to="/">Home </Link>
      <Link to="/posts">Posts </Link>
      <Link to="/about">About </Link>
    </nav>
  )
}