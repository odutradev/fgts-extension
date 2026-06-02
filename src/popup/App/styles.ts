import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: { main: '#008069' },
        background: { default: '#f0f2f5' }
    },
    components: {
        MuiSwitch: {
            styleOverrides: {
                switchBase: { color: '#ccc' },
                colorPrimary: { '&.Mui-checked': { color: '#00a884' } },
                track: { opacity: 1, backgroundColor: '#fff' }
            }
        }
    }
})

export const containerStyles = {
    width: '100%',
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 2
} as const