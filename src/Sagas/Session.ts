import { call, select, put, takeLatest } from 'redux-saga/effects'
import { SessionActionType } from '../Actions/Constants/Session'
import { setError } from '../Actions/Actions/Signup'

function* runRequestAuthentication () {
  const state = yield select()
  if (!state.signup.email || !state.signup.password) return yield put(setError({code: 'blankTextbox', message: ''}))
  if (!state.signup.agreement) return yield put(setError({code: 'notAgreement', message: ''}))
  yield call(() => console.log('runRequestAuthentication'))
}

function* runRequestLogout () {
  yield call(() => console.log('runRequestLogout'))
}

export default function* watchRequestAuthentication () {
  yield takeLatest(SessionActionType.REQUEST_AUTHENTICATION, runRequestAuthentication)
  yield takeLatest(SessionActionType.REQUEST_LOGOUT, runRequestLogout)
}