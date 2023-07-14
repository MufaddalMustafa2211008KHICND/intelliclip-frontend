import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField, ThemeProvider } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import theme from './inputFieldTheme';

const InputField = ({ placeholder, value, handler, type, required }) => {

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  const handleChange = (e) => {
    handler(e.target.value)
  }


  return (
    <ThemeProvider theme={theme}>
      <TextField 
        id="outlined-basic" 
        label={placeholder}
        variant="outlined" 
        value={value}
        onChange={handleChange}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        required={required}
        fullWidth={true}
        InputProps={type === 'password' && {
          endAdornment: <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              style={{color: '#8d8d8d'}}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>,
        }}
      />
    </ThemeProvider>
  )
}

export default InputField