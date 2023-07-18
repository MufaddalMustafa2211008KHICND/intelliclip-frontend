import React from 'react'
import UploadIcon from '@mui/icons-material/Upload';
import { Button, ThemeProvider } from '@mui/material';
import theme from './uploadBtnTheme'
import styles from './UploadBtn.module.css'

const UploadBtn = ({ isAuthenticated }) => {
  return (
    <div className={styles.container}>
        <ThemeProvider theme={theme}>
            <Button variant="outlined" startIcon={<UploadIcon />}>
            Get Started
            </Button>
        </ThemeProvider>
    </div>
  )
}

export default UploadBtn