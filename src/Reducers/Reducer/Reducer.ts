import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { LoginState } from '../../Interfaces/Login'
import { SignupState } from '../../Interfaces/Signup'

import loginReducer from '../Login'
import signupReducer from '../Signup'

export type Store = {
  login: LoginState,
  signup: SignupState,
  router: RouterState
}

export default (history: History) => combineReducers<Store>({
  login: loginReducer,
  signup: signupReducer,

  // The key must be router
  router: connectRouter(history)
})