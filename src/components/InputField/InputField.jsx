import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import './InputField.css'
import { Visibility, VisibilityOff } from '@mui/icons-material'

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
      <TextField 
        id="outlined-basic" 
        label={placeholder}
        variant="outlined" 
        value={value}
        onChange={handleChange}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
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
  )
}

export default InputField