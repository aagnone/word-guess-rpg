import React from 'react'
import googleLogin from '../assets/btn_google_signin_dark_normal_web.png'

const UIBar = () => {
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }
  return (
    <div className="ui-bar">
        <button onClick={google}>
            <img src={googleLogin} alt="Sign in With Google" />
        </button>
    </div>
  )
}

export default UIBar