import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register' 

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      confirm_password: ''
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
    event.target.reset()  // This resets the input fields to blank following submit.

    // ~*~ Passing username and password into this.state
    let {name, password, confirm_password} = this.state  

    // ~*~ Passing username and password data into props, only if password and confirm_password match though.
    if (password == confirm_password) this.props.dispatch(registerUserRequest({name, password}))
  }

  render() {
    return (
      <React.Fragment>
        <h1><strong>Register</strong></h1>
        <form onSubmit = {this.handleSubmit}>
          <label>Username:
            <input className="input is-normal" type = 'text' name = 'name' onChange = {this.handleFormData} />
          </label>
          <label>Password:
            <input className="input is-normal" type = 'password' name = 'password' onChange = {this.handleFormData} /> 
          </label>
          <label>Confirm password:
            <input className="input is-normal" type = 'password' name = 'confirm_password' onChange = {this.handleFormData} /> 
          </label>
          <br/>
          <br/>
          <input className="button is-light" type = 'submit'/>
        </form>
      </React.Fragment>
    )
  }
}

export default connect()(Register)