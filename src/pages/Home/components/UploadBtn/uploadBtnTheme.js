import { createTheme } from "@mui/material";

export default createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#8d8d8d',
                    // backgroundColor: 'white',
                    fontSize: '25px',
                    borderColor: '#8d8d8d',
                    borderWidth: '2px',
                    '&:hover': {
                        // backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        color: 'white',
                        borderColor: 'white',
                        borderWidth: '2px',

                        '.MuiSvgIcon-root': {
                            color: 'white'
                        }
                    },
                    
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    // fontSize: '40px',
                    color: '#8d8d8d',
                    // border: '2px solid red',
                    height: '30px',
                    width: '30px',
                }
            }
        }
    }
})