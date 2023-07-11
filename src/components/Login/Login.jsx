import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import styles from './Login.module.css'
import Button from '../Button/Button'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = (value) => {
    setEmail(value)
  }

  const passwordHandler = (value) => {
    setPassword(value)
  }

  return (
    <div>
      <div className={styles.inputContainer}>
        <InputField placeholder='E-mail Address' value={email} handler={emailHandler} type='email' />
      </div>
      <div className={styles.inputContainer}>
        <InputField placeholder='Password' value={password} handler={passwordHandler} type='password' />
      </div>
      <div className={styles.loginbtn}>
        <Button>Login</Button>
        <span className={styles.forgetpassword}>Forget Password?</span>
      </div>
    </div>
    
  )
}

export default Login