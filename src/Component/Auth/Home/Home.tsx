import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { DispatchProps, HomeProps } from '../../../Interfaces/Auth/Home/Home'
import { requestLogout } from '../../../Actions/Actions/Session'

import './Home.scss'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  requestLogout: () => dispatch(requestLogout())
})

const Login: FC<HomeProps> = ({
  requestLogout
}) => {

  return (
    <div className='home'>
      <div>
        <h2>ホーム</h2>
        <button onClick={() => requestLogout()}>ログアウト</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)