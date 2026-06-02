import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { useEffect } from 'react'

import { SettingsList } from '@/popup/App/subcomponents/SettingsList'
import { useWhatsAppStore } from '@/store/useWhatsAppStore'
import { theme, containerStyles } from '@/popup/App/styles'
import { Header } from '@/popup/App/subcomponents/Header'
import { Footer } from '@/popup/App/subcomponents/Footer'

export const App = () => {
    const isLoading = useWhatsAppStore((state) => state.isLoading)
    const initialize = useWhatsAppStore((state) => state.initialize)

    useEffect(() => {
        initialize()
    }, [initialize])

    if (isLoading) return null

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={containerStyles}>
                <Header />
                <SettingsList />
                <Footer />
            </Box>
        </ThemeProvider>
    )
}