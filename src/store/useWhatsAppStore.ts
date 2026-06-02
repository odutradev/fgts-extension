import { create } from 'zustand'

import { defaultSettings } from '@/types/whatsapp'

import type { PrivacySettings, PrivacySettingsKey } from '@/types/whatsapp'

type Store = {
    isLoading: boolean
    settings: PrivacySettings
    initialize: () => Promise<void>
    updateSetting: (key: PrivacySettingsKey, value: boolean) => void
}

export const useWhatsAppStore = create<Store>((set, get) => ({
    isLoading: true,
    settings: defaultSettings,
    initialize: async () => {
        const result = await chrome.storage.local.get(defaultSettings)
        set({ settings: result as PrivacySettings, isLoading: false })
    },
    updateSetting: (key, value) => {
        const newSettings = { ...get().settings, [key]: value }
        set({ settings: newSettings })
        chrome.storage.local.set({ [key]: value })
    }
}))