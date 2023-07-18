import React from 'react'
import styles from './Navbar.module.css'
import LinkX from '../LinkX/LinkX';
import AccountMenu from '../Menu/Menu';

const Navbar = ({ isAuthenticated }) => {
  return (
    <div className={styles.navbar}>
        <LinkX name='Home' path={'/'} />
        {isAuthenticated && <AccountMenu />}
    </div>
  )
}

export default Navbar