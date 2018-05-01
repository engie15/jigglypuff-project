// ~*~ NOTE ~*~ //
  // If user aleady signed in, show the log out button only
  // If user is yet to sign in or register, show these buttons and a welcome message

import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout' // CHECK: name of action and file to match what Steve makes

const LandingPage = () => (
    <div>
      {props.auth.isAuthenticated  // CHECK: name of prop matches action that Steve makes
        // ~*~ If is logged in, show the Jigglypuff component and the button to logout ~*~
        ? <div>
            <Jigglepuff />
            {/* CHECK: name of action for logoutUser */}
            <button onClick = {() => props.dispatch(logoutUser())}> Logout </button>  
          </div>
          
        // ~*~ If not logged in, show buttons to login or register ~*~
        : <div>
            <h1>Login or register to view all the jigglypuffing goodness that you never knew you needed</h1>
            <Link to = '/login'> Login </Link>
            <Link to = '/register'> Register </Link>
          </div>
      }
    </div>
)

//  ~*~ Take in props info to see if user signed in or not
// CHECK: This is taking in the current state of whether user is signed in. Want to understand exactly where this sits. Reducer? 
const mapStateToProps = ({auth}) => { 
  return {auth}
}

export default connect(mapStateToProps) (LandingPage)