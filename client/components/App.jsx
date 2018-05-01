// NOTE: We will beautify this site once it functions.

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import LandingPage from './LandingPage'
import Login from './Login'
import Register from './Register'

const App = () => (
  <Router>
    <div>
      <h1>Kia ora beautiful world</h1>
      <Route path = '/' component = {LandingPage} />
      <Route path = '/login' component = {Login} />
      <Route path = '/register' component = {Register} /> 
    </div>
  </Router>
)

export default App