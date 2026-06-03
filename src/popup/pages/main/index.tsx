import { ThemeProvider, CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { GridBackground } from '@popup/components/gridBackground'
import { FeatureList } from './subcomponents/featureList'
import { Header } from './subcomponents/header'
import { theme } from '@popup/styles'
import { Separator } from './styles'

const App = () => (
  <GridBackground>
    <Header />
    <Separator />
    <FeatureList />
  </GridBackground>
)

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