import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Blog from './components/blog';
import Posts from './components/posts';
import Post from './components/post';
import About from './components/about';
import Error from './components/error';
import Footer from './components/footer';
import './App.css';

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={Post} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </main>
  );
}

