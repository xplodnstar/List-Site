import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
import '../styles/base.css'

import Home from './Home'
import PostList from './PostList'
import Post from './Post'
import PostForm from './PostForm'

const App = props => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route path="/:slug" component={PostList} />
        <Route exact path="/post/:id" component={Post} />
        <Route exact path="/form" component={PostForm} />
      </div>
    </Router>
  </Provider>
)

export default App