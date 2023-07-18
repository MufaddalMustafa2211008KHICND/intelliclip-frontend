import React from 'react'
import UploadIcon from '@mui/icons-material/Upload';
import { Button, ThemeProvider } from '@mui/material';
import theme from './uploadBtnTheme'
import styles from './UploadBtn.module.css'
import { useNavigate } from 'react-router-dom';

const UploadBtn = ({ isAuthenticated }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    if(!isAuthenticated) {
      navigate('/login')
      return
    }
  }

  return (
    <div className={styles.container}>
        <ThemeProvider theme={theme}>
            <Button variant="outlined" startIcon={<UploadIcon />} onClick={handleClick}>
            Get Started
            </Button>
        </ThemeProvider>
    </div>
  )
}

export default UploadBtn