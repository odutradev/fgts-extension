import { useSettings } from '../hooks/useSettings'
import { Header } from './components/Header'
import { SettingsList } from './components/SettingsList'
import { Footer } from './components/Footer'

export const App = () => {
    const { settings, isLoading, updateSetting } = useSettings()

    if (isLoading) return null

    return (
        <>
            <Header />
            <SettingsList settings={settings} onUpdate={updateSetting} />
            <Footer />
        </>
    )
}