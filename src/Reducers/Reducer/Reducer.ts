import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { LoginState } from '../../Interfaces/Login'
import { SignupState } from '../../Interfaces/Signup'
import { ToastState } from '../../Interfaces/Toast/Toast'

import loginReducer from '../Login'
import signupReducer from '../Signup'
import toastReducer from '../Toast'

export type Store = {
  login: LoginState,
  signup: SignupState,
  toast: ToastState,
  router: RouterState
}

export default (history: History) => combineReducers<Store>({
  login: loginReducer,
  signup: signupReducer,
  toast: toastReducer,

  // The key must be router
  router: connectRouter(history)
})