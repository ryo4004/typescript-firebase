import React, { FC, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { StateProps, DispatchProps, AuthProps } from '../../Interfaces/Auth/Auth'

import { requestAuthentication } from '../../Actions/Actions/Session'

// import Login from './Login/Login'
// import Signup from './Signup/Signup'

import './Auth.scss'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  requestAuthentication: () => dispatch(requestAuthentication())
})

const Auth: FC<AuthProps> = ({
  requestAuthentication
}) => {

  useEffect(() => {
    requestAuthentication()
  }, [requestAuthentication])

  return (
    <div className='auth'>
      <Switch>
        {/* <Route path='/login' component={Login} /> */}
        {/* <Route path='/signup' component={Signup} /> */}
      </Switch>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)