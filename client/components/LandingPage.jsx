// ~*~ NOTE ~*~ //
  // If user aleady signed in, show the log out button only
  // If user is yet to sign in or register, show these buttons and a welcome message

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout' 
import Jigglypuff from './Jigglypuff'

const LandingPage = (props) => {
  console.log(props.auth)
  return( 
    <div>
      {props.auth.isAuthenticated  
        // ~*~ If is logged in, show the Jigglypuff component and the button to logout ~*~
        ? <div>
            <button className="button is-normal is-light is-mobile" onClick = {() => props.dispatch(logoutUser())}> Logout </button>  
            <Jigglypuff />
          </div>
          
        // ~*~ If not logged in, show buttons to login or register ~*~
        : <div>
            <section class="hero is-flex-mobile">
              <div class="hero-body">
                <div class="container is-flex-mobile">
                  <h1 class="title is-1 is-centered is-flex-mobile">
                    Having trouble sleeping?
                  </h1>
                </div>
              </div>
            </section>
            <div class="field is-grouped is-flex-mobile">
              <p class="control">
              <Link to = '/login'> <a className="button is-large is-flex-mobile">Login</a> </Link>
              </p>
              <p class="control">
              <Link to = '/register'> <a className="button is-large">Register</a> </Link>
              </p>
            </div>
          </div>
      }
    </div>
)}

//  ~*~ Take in props info to see if user signed in or not
const mapStateToProps = ({auth}) => { 
  return {auth}
}

export default connect(mapStateToProps)(LandingPage)