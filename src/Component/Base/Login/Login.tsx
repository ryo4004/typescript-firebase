import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import store from '../../../Store/Store'
import { StateProps, DispatchProps, LoginProps } from '../../../Interfaces/Login'

import {
  changeEmail,
  changePassword,
  requestLogin,
  setError
} from '../../../Actions/Actions/Login'

import './Login.scss'

const mapStateToProps = (state: ReturnType<typeof store.getState>): StateProps => ({
  loading: state.login.loading,
  email: state.login.email,
  password: state.login.password,
  error: state.login.error
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeEmail: (email) => dispatch(changeEmail(email)),
  changePassword: (password) => dispatch(changePassword(password)),
  requestLogin: () => dispatch(requestLogin()),
  setError: (err) => dispatch(setError(err))
})

const Login: FC<LoginProps> = ({
  loading, email, password, error,
  changeEmail, changePassword, requestLogin, setError
}) => {

  useEffect(() => {
    setError({code: '', message: ''})
    return () => setError({code: '', message: ''})
  }, [])

  const showError = () => {
    if (!error) return false
    let message
    switch (error.code) {
      // Local Error
      case 'blankTextbox':
        message = '入力を確認してください'
        break
      // Server Error
      case 'userNotFound':
        message = 'ユーザが見つかりません'
        break
      case 'passwordWrong':
        message = 'パスワードが間違っています'
        break
      case 'updateUserNotFound':
        message = 'データアップデートエラー'
        break
      case 'updateUserError':
        message = 'データベースエラー'
        break
      default:
        message = 'error: ' + error.code
    }
    return (
      <div className='err'>{message}</div>
    )
  }

  const buttonLabel = loading ? '読み込み中' : 'ログイン'

  return (
    <div className='login'>
      <div>
        <h2>ログイン</h2>
        <input type='text' value={email} onChange={(e) => changeEmail(e.target.value)} placeholder='ユーザ名' />
        <input type='password' value={password} onChange={(e) => changePassword(e.target.value)} placeholder='パスワード' />
        {showError()}
        <button onClick={() => requestLogin()} onTouchStart={() => {}}>{buttonLabel}</button>
        <div className='add-account'>アカウントの作成は<Link to='/signup'>こちら</Link></div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)