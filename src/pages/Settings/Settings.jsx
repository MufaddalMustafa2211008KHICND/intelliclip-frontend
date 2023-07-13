import React, { useState } from 'react'
import styles from './Settings.module.css'
import InputField from '../../components/InputField/InputField'
import Button from '../../components/Button/Button'

const Settings = () => {

    const [name, setName] = useState('John Doe')
    const [email, setEmail] = useState('john@doe.com')
    const [password, setPassword] = useState('12345678')

    const nameHandler = (value) => {
        setName(value)
    }
    
    const emailHandler = (value) => {
        setEmail(value)
    }

    const passwordHandler = (value) => {
        setPassword(value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()

        alert(`name: ${name} \nemail: ${email} \npassword: ${password}`)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleUpdate}>
                <div className={styles.inputContainer}>
                    <InputField placeholder='Full Name' value={name} handler={nameHandler} type='text' />
                </div>
                <div className={styles.inputContainer}>
                    <InputField placeholder='E-mail Address' value={email} handler={emailHandler} type='email' />
                </div>
                <div className={styles.inputContainer}>
                    <InputField placeholder='Password' value={password} handler={passwordHandler} type='password' />
                </div>
                <div className={styles.btnContainer}>
                    <Button type='submit'>Update</Button>
                </div>
            </form>
        </div>
    )
}

export default Settings