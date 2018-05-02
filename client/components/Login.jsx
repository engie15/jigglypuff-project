import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/login' 

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
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
    let {name, password} = this.state
    
    // ~*~ Passing username and password data into props 
    this.props.dispatch(loginUser({
      name, 
      password
    }))
  }

  render() {
    return (
      <React.Fragment>
        <h1><strong>Login</strong></h1>
        <form onSubmit = {this.handleSubmit}>
          <label>Username:
            <input className="input is-normal" type = 'text' name = 'name' onChange = {this.handleFormData} />
          </label>
          <label>Password:
            <input className="input is-normal" type = 'password' name = 'password' onChange = {this.handleFormData} /> 
          </label>
          <br/>
          <br/>
          <input type = 'submit'/>
        </form>
      </React.Fragment>
    )
  }
}

export default connect() (Login)