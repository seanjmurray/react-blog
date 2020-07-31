import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Posts from './components/posts'
import Post from './components/post'
import Admin from './components/admin'
import Error from './components/error'
import Footer from './components/footer'

export default function App () {
  return (
    <section>
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/posts" component={Posts} />
            <Route path="/admin" component={Admin} />
            <Route path="/blog/:slug" component={Post} />
            <Route component={Error} />
          </Switch>
        </ BrowserRouter>
      </main>
      <Footer />
    </section>
  )
}
