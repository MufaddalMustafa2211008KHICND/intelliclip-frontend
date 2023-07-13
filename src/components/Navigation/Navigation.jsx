import styles from './Navigation.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import LinkX from '../LinkX/LinkX'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
        <LinkX name='Login' path='/login' />
        <LinkX name='Register' path='/register' />
    </div>
  )
}

export default Navigation