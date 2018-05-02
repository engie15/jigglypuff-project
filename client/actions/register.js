import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin} from './login'

export function registerUserRequest ({name, password}) { 
  // global.window.localStorage.setItem('fun', 'times')
  return (dispatch) => {
    request
      .post('/api/v1/auth/register') 
      .send({
        name, password
      })
      .end((err, res) => {
        if (err) {
          alert("didn't work")
          console.log({err});
        }
        else {
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
          document.location = "/#/"
        }
      })
  }
}
