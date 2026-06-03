import { create } from 'zustand'

import type { SystemStore } from './types'

export const useSystemStore = create<SystemStore>((set) => ({
  features: {
    blockAds: true,
    darkTheme: false,
    analytics: true
  },
  toggleFeature: (key) =>
    set((state) => ({
      features: {
        ...state.features,
        [key]: !state.features[key]
      }
    }))
}))
