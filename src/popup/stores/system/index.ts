import { create } from 'zustand'

import type { SystemStore } from './types'

const DEFAULT_FEATURES = {
  blockAds: true,
  darkTheme: false,
  analytics: true,
  monochromatic: false
}

export const useSystemStore = create<SystemStore>((set) => ({
  features: DEFAULT_FEATURES,
  toggleFeature: (key) =>
    set((state) => ({
      features: { ...state.features, [key]: !state.features[key] }
    }))
}))

chrome.storage.local.get(Object.keys(DEFAULT_FEATURES), (stored) => {
  useSystemStore.setState((state) => ({
    features: { ...state.features, ...(stored as Partial<typeof DEFAULT_FEATURES>) }
  }))
})
