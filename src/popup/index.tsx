import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { App } from '@/popup/App'

const theme = createTheme({ palette: { mode: 'light' } })
const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StrictMode>
  )
}