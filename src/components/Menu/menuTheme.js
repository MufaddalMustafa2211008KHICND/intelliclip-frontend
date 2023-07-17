import { createTheme } from "@mui/material";

export default createTheme({

    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    width: '60px',
                    height: '60px',
                }
            }
        }
    }

})