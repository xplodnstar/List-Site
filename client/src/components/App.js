import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
import '../styles/base.css'

import Home from './Home'
import PicsList from './PicsList'
import TextList from './TextList'
import Post from './Post'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Route exact path="/" component={Home} />
            <Route exact path="/picsList" component={PicsList} />
            <Route exact path="/textList" component={TextList} />
            <Route exact path="/post" component={Post} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App