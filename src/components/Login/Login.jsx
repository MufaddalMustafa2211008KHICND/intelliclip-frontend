import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import styles from './Login.module.css'

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
        <InputField placeholder='E-mail Address' value={email} handler={emailHandler} type='email' required={true} />
      </div>
      <div className={styles.inputContainer}>
        <InputField placeholder='Password' value={password} handler={passwordHandler} type='password' required={true} />
      </div>
      <div className={styles.loginbtn}>
<button className={styles.button}>Login</button>
<span className={styles.forgetpassword}>Forget Password?</span>
    </div>
    </div>
    
  )
}

export default Login