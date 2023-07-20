import React from 'react'
import styles from './Navbar.module.css'
import LinkX from '../LinkX/LinkX';
import AccountMenu from '../Menu/Menu';
import { useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import MyVideos from '../MyVideos/MyVideos';
const Navbar = ({ isAuthenticated }) => {

  const { pathname } = useLocation()

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      {isAuthenticated ? <LinkX name='Videos' path={'/videos'}/> : <></>}
        <LinkX name='Home' path={'/'} />
        {isAuthenticated ? <AccountMenu /> : (pathname === '/' && <LinkX name='Signin' path={'/login'} />)}
        
    </div>

  )
}

export default Navbar