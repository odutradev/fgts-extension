import { useState, useEffect } from 'react'

import { defaultSettings } from '../types/settings'
import type { PrivacySettings } from '../types/settings'

export const useSettings = () => {
    const [settings, setSettings] = useState<PrivacySettings>(defaultSettings)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        chrome.storage.local.get(defaultSettings, (result) => {
            setSettings(result as PrivacySettings)
            setIsLoading(false)
        })
    }, [])

    const updateSetting = (key: keyof PrivacySettings, value: boolean) => {
        const newSettings = { ...settings, [key]: value }
        setSettings(newSettings)
        chrome.storage.local.set({ [key]: value })
    }

    return { settings, isLoading, updateSetting }
}