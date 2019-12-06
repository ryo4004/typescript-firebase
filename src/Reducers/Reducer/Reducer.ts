import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

export default (history: History) => combineReducers({

  // The key must be router
  router: connectRouter(history)
})