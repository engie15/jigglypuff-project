import { combineReducers } from 'redux'

import auth from './auth'
import jigglepuff from './jiggle'

export default combineReducers({
  auth,
  jigglepuff
})