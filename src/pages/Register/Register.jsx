import React, { useState } from 'react'
import InputField from '../../components/InputField/InputField'
import styles from './Register.module.css'
import Button from '../../components/Button/Button'
import Navigation from '../../components/Navigation/Navigation'
import { useNavigate } from 'react-router-dom'

const Register = ({ hideNavigation }) => {

  const navigate = useNavigate()

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

  const handleRegister = (e) => {
    e.preventDefault()

    alert(`name: ${name} \nemail: ${email} \npassword: ${password}`)
  }

  const gotoHome = () => {
    navigate('/')
  }

  return (
    <div className={styles.mainContainer}>
      <Navigation/>
      <form onSubmit={handleRegister}>
        <div className={styles.inputContainer}>
          <InputField placeholder='Full Name' value={name} handler={nameHandler} type='text' required={true} />
        </div>
        <div className={styles.inputContainer}>
          <InputField placeholder='E-mail Address' value={email} handler={emailHandler} type='email' required={true} />
        </div>
        <div className={styles.inputContainer}>
          <InputField placeholder='Password' value={password} handler={passwordHandler} type='password' required={true} />
        </div>
        <div className={styles.btnContainer}>
          <Button type='submit'>Register</Button>
        </div>
      </form>
    </div>
  )
}

export default Register