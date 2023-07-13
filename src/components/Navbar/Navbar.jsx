import React from 'react'
import styles from './Navbar.module.css'
import LinkX from '../LinkX/LinkX';
import AccountMenu from '../Menu/Menu';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <LinkX name='Home' path={'/'} />
        <AccountMenu />
    </div>
  )
}

export default Navbar