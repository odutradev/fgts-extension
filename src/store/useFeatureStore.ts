import { create } from 'zustand'

type FeatureState = {
  features: Record<string, boolean>
  toggleFeature: (key: string) => void
}

export const useFeatureStore = create<FeatureState>((set) => ({
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