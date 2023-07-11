import styles from './Navigation.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
        <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.default}` : styles.default}  to='/' >Login</NavLink>
        <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.default}` : styles.default} to='/register' >Register</NavLink>
    </div>
  )
}

export default Navigation