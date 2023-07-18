import React from 'react'
import styles from './Navbar.module.css'
import LinkX from '../LinkX/LinkX';
import AccountMenu from '../Menu/Menu';
import { useLocation } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {

  const { pathname } = useLocation()

  return (
    <div className={styles.navbar}>
        <LinkX name='Home' path={'/'} />
        {isAuthenticated ? <AccountMenu /> : (pathname === '/' && <LinkX name='Signin' path={'/login'} />)}
    </div>
  )
}

export default Navbar