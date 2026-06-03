import { create } from 'zustand'

import type { SystemStore } from './types'

const DEFAULT_FEATURES = {
  monochromatic: false
}

export const useSystemStore = create<SystemStore>(() => ({
  features: DEFAULT_FEATURES
}))

chrome.storage.local.get(Object.keys(DEFAULT_FEATURES), (stored) => {
  useSystemStore.setState((state) => ({
    features: { ...state.features, ...(stored as Partial<typeof DEFAULT_FEATURES>) }
  }))
})

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace !== 'local') return
  const updatedFeatures = Object.entries(changes).reduce<Record<string, boolean>>((acc, [key, change]) => (
    key in DEFAULT_FEATURES ? { ...acc, [key]: Boolean(change.newValue) } : acc
  ), {})
  if (Object.keys(updatedFeatures).length === 0) return
  useSystemStore.setState((state) => ({
    features: { ...state.features, ...updatedFeatures }
  }))
})