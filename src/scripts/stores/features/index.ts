import { create } from 'zustand'

import type { FeaturesStore, SystemFeatures } from './types'

const DEFAULT_FEATURES: SystemFeatures = {
  monochromatic: false,
  monochromaticTimerEnabled: false,
  monochromaticTimerDuration: 5,
  monochromaticExpiration: 0,
  blurImages: false,
  blurImagesMinSize: 100,
  waBlurMessages: false,
  waBlurPreviews: false,
  waBlurNames: false,
  waBlurPhotos: false,
  waBlurStickers: false
}

export const useFeaturesStore = create<FeaturesStore>(() => ({
  features: DEFAULT_FEATURES
}))

chrome.storage.local.get(Object.keys(DEFAULT_FEATURES), (stored) => {
  useFeaturesStore.setState((state) => ({
    features: { ...state.features, ...(stored as Partial<SystemFeatures>) }
  }))
})

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace !== 'local') return
  const updatedFeatures = Object.entries(changes).reduce<Partial<SystemFeatures>>((acc, [key, change]) => (
    key in DEFAULT_FEATURES ? { ...acc, [key]: change.newValue } : acc
  ), {})
  if (Object.keys(updatedFeatures).length === 0) return
  useFeaturesStore.setState((state) => ({
    features: { ...state.features, ...updatedFeatures }
  }))
})
