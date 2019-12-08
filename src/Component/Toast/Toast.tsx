import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import store from '../../Store/Store'
import { StateProps, DispatchProps, ToastProps } from '../../Interfaces/Toast/Toast'

import './Toast.scss'

const mapStateToProps = (state: ReturnType<typeof store.getState>): StateProps => ({
  status: state.toast.status,
  message: state.toast.message,
  hide: state.toast.hide
})

const mapDispatchToProps = () => ({})

const Login: FC<ToastProps> = ({
  status, message, hide
}) => {

  const showToast = () => {
    if (!status) return <div></div>
    const className = hide ? 'toast hide' : 'toast'
    return (
      <div className={className}>
        <div>
          {message}
        </div>
      </div>
    )
  }

  return (
    <React.Fragment>
      {showToast()}
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)