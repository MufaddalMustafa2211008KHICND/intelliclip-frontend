import React from 'react'
import { TextField } from '@mui/material'
import './InputField.css'

const InputField = ({ placeholder, value, handler, type, required }) => {

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
        type={type}
        required={required}
        fullWidth={true}
        InputLabelProps={{
          className: 'label'
        }}
      />
  )
}

export default InputField