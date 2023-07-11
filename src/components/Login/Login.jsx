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

  const handleLogin = (e) => {
    e.preventDefault()

    alert(`email: ${email} \npassword: ${password}`)
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className={styles.inputContainer}>
          <InputField placeholder='E-mail Address' value={email} handler={emailHandler} type='email' required={true} />
        </div>
        <div className={styles.inputContainer}>
          <InputField placeholder='Password' value={password} handler={passwordHandler} type='password' required={true} />
        </div>
        <div className={styles.loginbtn}>
          <Button type='submit'>Login</Button>
          <span className={styles.forgetpassword}>Forget Password?</span>
        </div>
      </form>
    </div>
    
  )
}

export default Login