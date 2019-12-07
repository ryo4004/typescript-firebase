import { call, select, put, takeLatest } from 'redux-saga/effects'
import { SignupActionType } from '../Actions/Constants/Signup'
import { setError } from '../Actions/Actions/Signup'

function* runRequestSignup () {
  const state = yield select()
  if (!state.signup.email || !state.signup.password) return yield put(setError({code: 'blankTextbox', message: ''}))
  if (!state.signup.agreement) return yield put(setError({code: 'notAgreement', message: ''}))
  yield call(() => console.log('runRequestSignup'))
}

export default function* watchRequestSignup () {
  yield takeLatest(SignupActionType.REQUEST_SIGNUP, runRequestSignup)
}