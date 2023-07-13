import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LinkX.module.css'

const LinkX = ({ name, path }) => {
  return (
    <NavLink className={({ isActive }) => isActive ? `${styles.active} ${styles.default}` : styles.default} to={path} >{name}</NavLink>
  )
}

export default LinkX