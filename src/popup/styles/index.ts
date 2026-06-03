import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0a',
      paper: '#121212'
    },
    primary: {
      main: '#ffffff',
      contrastText: '#000000'
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0'
    },
    divider: 'rgba(255, 255, 255, 0.08)',
    action: {
      hover: 'rgba(255, 255, 255, 0.05)',
      selected: 'rgba(255, 255, 255, 0.1)'
    }
  },
  typography: {
    fontSize: 13,
    fontFamily: '"Inter", "Roboto", sans-serif'
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0a0a0a',
          scrollbarWidth: 'thin',
          margin: 0,
          padding: 0,
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-track': { background: '#0a0a0a' },
          '&::-webkit-scrollbar-thumb': { background: '#333333', borderRadius: '4px' }
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          borderRadius: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          opacity: '1 !important'
        },
        thumb: {
          borderRadius: '4px',
          backgroundColor: '#666666',
          boxShadow: 'none'
        },
        switchBase: {
          '&.Mui-checked': {
            '& .MuiSwitch-thumb': { backgroundColor: '#ffffff' },
            '& + .MuiSwitch-track': {
              backgroundColor: 'rgba(255, 255, 255, 0.15) !important',
              borderColor: 'rgba(255, 255, 255, 0.25)',
              opacity: '1 !important'
            }
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: { margin: 0 },
        label: {
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontWeight: 500,
          color: '#e0e0e0',
          fontFamily: 'monospace'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(255, 255, 255, 0.08)' }
      }
    }
  }
})