// ~*~ NOTE ~*~ //
  // If user aleady signed in, show the log out button only
  // If user is yet to sign in or register, show these buttons and a welcome message

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout' 
// import Jigglypuff from './Jigglypuff'

const LandingPage = (props) => {
  console.log(props.auth)
  return( 
    <div>
      {props.auth.isAuthenticated  
        // ~*~ If is logged in, show the Jigglypuff component and the button to logout ~*~
        ? <div>
            {/* <Jigglypuff /> */}
            <button onClick = {() => props.dispatch(logoutUser())}> Logout </button>  
          </div>
          
        // ~*~ If not logged in, show buttons to login or register ~*~
        : <div>
            <div class="field is-grouped">
              <p class="control">
              <Link to = '/login'> <a className="button is-large">Login</a> </Link>
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