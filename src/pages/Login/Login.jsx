import React, { useEffect, useState } from 'react'
import InputField from '../../components/InputField/InputField'
import styles from './Login.module.css'
import Button from '../../components/Button/Button'
import Navigation from '../../components/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { createPortal } from 'react-dom';
import { Alert, AlertTitle } from '@mui/material';

const Login = () => {

  const { login, checkAuth } = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [alertType, setAlertType] = useState('success')
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if(checkAuth()) {
      navigate('/')
    }
  }, [])

  const handleMessage = (value, type) => {
    if(value === '') {
      setShowAlert(false)
      setMessage(value)
      return
    }
    setShowAlert(true)
    setAlertType(type)
    setMessage(value)
  }

  const handleLoading = (value) => {
    setLoading(value)
  }

  const emailHandler = (value) => {
    setEmail(value)
  }

  const passwordHandler = (value) => {
    setPassword(value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const body = {
      email, password
    }

    await login({ reqBody: body, handleLoading, handleMessage })
  }

  return (
    <div className={styles.mainContainer}>
      <Navigation/>
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
      {loading && <h1 style={{color: 'white'}}>Loading...</h1>}
      {showAlert && createPortal(
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', position: 'absolute', top: '0', left: '0'}}>
          <Alert severity={alertType} style={{margin: '20px', width: '600px'}}
            onClose={() => setShowAlert(false)}>
            <AlertTitle><span style={{textTransform: 'capitalize'}}>{alertType}</span></AlertTitle>
            {message}
          </Alert>
        </div>, document.getElementById('root')
      )}
    </div>
  )
}

export default Login