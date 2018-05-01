import { combineReducers } from 'redux'

import auth from './current-page'
import jigglepuff from './jiggle'

export default combineReducers({
  auth,
  jiggle
})