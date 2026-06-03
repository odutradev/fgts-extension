import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { FeatureList } from '@popup/components/FeatureList'
import { MainContainer, Separator } from './styles'
import { Header } from '@popup/components/Header'

const theme = createTheme({ palette: { mode: 'light' } })
const rootElement = document.getElementById('root')

const App = () => {
  return (
    <MainContainer component="main">
      <Header />
      <Separator />
      <FeatureList />
    </MainContainer>
  )
}

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