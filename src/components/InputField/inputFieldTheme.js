import { createTheme } from "@mui/material";

export default createTheme({
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#8d8d8d',
                    
                    '&.Mui-focused': {
                        color: '#a4c6f8'
                    }
                },
                
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: '#8d8d8d',
                    borderRadius: '8px',
                    borderWidth: '2px'
                },
                root: {

                    color: 'white',

                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#a4c6f8'
                    },
                },
            }
        }
    }
})