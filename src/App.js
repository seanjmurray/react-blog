import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/blog/:slug">
            <Post />
          </Route>
          <Route component={Error} />
        </Switch>
      </main>
      <Footer />
    </section>
  )
}
