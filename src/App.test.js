import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import App from './App'
import Header from './components/header'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , div)
})
it('render header', () => {
  render(<BrowserRouter><Header /></BrowserRouter>)
  const links = document.getElementsByTagName('a')
  expect(links.length).toBe(3)
})
