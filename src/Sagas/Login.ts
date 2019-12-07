import { call, select, put, takeLatest } from 'redux-saga/effects'
import { LoginActionType } from '../Actions/Constants/Login'
import { setError } from '../Actions/Actions/Login'

function* runRequestLogin () {
  const state = yield select()
  if (!state.login.email || !state.login.password) return yield put(setError({code: 'blankTextbox', message: ''}))
  yield call(() => console.log('runRequestLogin'))
}

export default function* watchRequestLogin () {
  yield takeLatest(LoginActionType.REQUEST_LOGIN, runRequestLogin)
}