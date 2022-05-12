import React from 'react'
import googleLogin from '../assets/btn_google_signin_dark_normal_web.png'

const UIBar = () => {
  return (
    <div className="ui-bar">
        <a href="http://localhost:5000/auth/google" aria-label="sign in with google">
            <img src={googleLogin} alt="Sign in With Google" />
        </a>
    </div>
  )
}

export default UIBar