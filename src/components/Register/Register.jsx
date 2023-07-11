import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import styles from './Register.module.css'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const nameHandler = (value) => {
    setName(value)
  }
  
  const emailHandler = (value) => {
    setEmail(value)
  }

  const passwordHandler = (value) => {
    setPassword(value)
  }

  return (
    <div>
      <div className={styles.inputContainer}>
        <InputField placeholder='Full Name' value={name} handler={nameHandler} type='text' required={true} />
      </div>
      <div className={styles.inputContainer}>
        <InputField placeholder='E-mail Address' value={email} handler={emailHandler} type='email' required={true} />
      </div>
      <div className={styles.inputContainer}>
        <InputField placeholder='Password' value={password} handler={passwordHandler} type='password' required={true} />
      </div>
      <div className={styles.loginbtn}>
<button className={styles.button}>Register</button>
</div>
    </div>
  )
}

export default Register