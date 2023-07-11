import styled from './Login.module.css'
import React from 'react'

const Login = () => {
  return (
    <div className={styled.loginbtn}>
<button className={styled.button}>Login</button>
<span className={styled.forgetpassword}>Forget Password?</span>
</div>
  )
}

export default Login