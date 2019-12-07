import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import store from '../../../Store/Store'
import { StateProps, DispatchProps, SignupProps } from '../../../Interfaces/Signup'

import {
  changeEmail,
  changePassword,
  changeAgreement,
  requestSignup,
  setError
} from '../../../Actions/Actions/Signup'

import './Signup.scss'

const mapStateToProps = (state: ReturnType<typeof store.getState>): StateProps => ({
  loading: state.signup.loading,
  email: state.signup.email,
  password: state.signup.password,
  agreement: state.signup.agreement,
  error: state.signup.error
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeEmail: (email) => dispatch(changeEmail(email)),
  changePassword: (password) => dispatch(changePassword(password)),
  changeAgreement: (agreement) => dispatch(changeAgreement(agreement)),
  requestSignup: () => dispatch(requestSignup()),
  setError: (error) => dispatch(setError(error))
})

const Signup: FC<SignupProps> = ({
  loading, email, password, agreement, error,
  changeEmail, changePassword, changeAgreement, requestSignup, setError
}) => {

  useEffect(() => {
    return () => changeEmail('')
  }, [changeEmail])

  useEffect(() => {
    return () => changePassword('')
  }, [changePassword])

  useEffect(() => {
    setError({code: '', message: ''})
    return () => setError({code: '', message: ''})
  }, [setError])

  const showError = () => {
    if (error.code === '') return false
    let message
    switch (error.code) {
      // Local Error
      case 'notAgreement':
        message = '利用規約およびプライバシーポリシーへの同意が必要です'
        break
      case 'blankTextbox':
        message = '入力を確認してください'
        break
      // Server Error
      case 'blankUserid':
        message = 'ユーザ名が入力されていません'
        break
      case 'blankPassword':
        message = 'パスワードが入力されていません'
        break
      case 'alreadySignuped':
        message = '指定されたユーザ名は使えません'
        break
      case 'DBError':
        message = 'データベースエラー'
        break
      default:
        message = 'error: ' + error.code
    }
    return (
      <div className='err'>{message}</div>
    )
  }

  const buttonLabel = loading ? '読み込み中' : '登録する'

  return (
    <div className='signup'>
      <div>
        <h2>アカウントの新規作成</h2>
        <input type='text' value={email} onChange={(e) => changeEmail(e.target.value)} placeholder='ユーザ名' />
        <input type='password' value={password} onChange={(e) => changePassword(e.target.value)} placeholder='パスワード' />
        <div className='agreement'>
          <input type='checkbox' id='agreement' name='agreement' checked={agreement} onChange={() => changeAgreement(!agreement)} /><label htmlFor='agreement'>利用規約およびプライバシーポリシーに同意します</label>
        </div>
        {showError()}
        <button onClick={() => requestSignup()} onTouchStart={() => {}}>{buttonLabel}</button>
        <div className='login-account'>作成済みの方は<Link to='/login'>こちら</Link></div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)