// NOTE: We will beautify this site once it functions.

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import LandingPage from './LandingPage'
import Login from './Login'
import Register from './Register'

const App = () => (
  <Router>
    <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-centered">
            Having trouble sleeping?
          </h1>
        </div>
      </div>
    </section>
      <Route path = '/' component = {LandingPage} />
      <Route path = '/login' component = {Login} />
      <Route path = '/register' component = {Register} /> 
    </div>
  </Router>
)

export default App