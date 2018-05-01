import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/login' // CHECK: name of action and file to match what Steve makes

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }
    this.handleFormData = this.handleFormData.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFormData (event) {  // ~*~ Updates this.state with details entered into form
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    // ~*~ Passing username and password into this.state
    let {user_name, password} = this.state  

    // ~*~ Passing username and password data into props 
    // CHECK: name of action to match what Steve makes
    this.props.dispatch(loginUser({user_name, password}))
  }

  render() {
    return (
      <React.Fragment>
        <h1><strong>Login</strong></h1>
        <form onSubmit = {this.handleSubmit}>
          <label>Username:
            <input type = 'text' name = 'user_name' onChange = {this.handleFormData} />
          </label>
          <label>Password:
            {/* CHECK: Where does this password type come in? Is this how it knows to hash and hide the password as it's being typed into the input box? */}
            <input type = 'password' name = 'password' onChange = {this.handleFormData} /> 
          </label>
          <input type = 'submit'/>
        </form>
      </React.Fragment>
    )
  }
}

// CHECK: Harrison's auth-plates has class names that appear to feed into other functions. e.g. <input type = 'submit' className = 'button is-success'> Initial look, can't see what this is linked to. Haven't talked to Harrison yet.

export default connect() (Login)