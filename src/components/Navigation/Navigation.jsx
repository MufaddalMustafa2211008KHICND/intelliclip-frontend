import styled from './Navigation.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={styled.Navigation}>
        <Link className={styled.login}  to='/login' >Login</Link>
        <Link className={styled.register} to='/register' >Register</Link>
    </div>
  )
}

export default Navigation