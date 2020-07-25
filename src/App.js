import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Posts from './components/posts'
import Post from './components/post'
import About from './components/about'
import Admin from './components/admin'
import Error from './components/error'
import Footer from './components/footer'

export default function App () {
  return (
    <section>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/posts" component={Posts} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/admin" component={Admin} />
          <Route path="/blog/:slug" component={Post} />
          <Route component={Error} />
        </Switch>
      </main>
      <Footer />
    </section>
  )
}
