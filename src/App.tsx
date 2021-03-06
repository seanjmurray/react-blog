import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Posts from './components/posts'
import Post from './components/post'
import Admin from './components/admin'
import EditPost from './components/editpost'
import Error from './components/error'
import Footer from './components/footer'

export default function App (): JSX.Element {
  return (
    <section>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Admin} />
          <Route path="/edit/:slug" component={EditPost} />
          <Route path="/blog/:slug" component={Post} />
          <Route component={Error} />
        </Switch>
      </main>
      <Footer />
    </section>
  )
}
