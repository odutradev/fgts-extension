import { useSystemStore } from '@popup/stores/system'

import type { SystemFeatures } from '@popup/stores/system/types'

export const useFeatureToggle = () => {
  const { features } = useSystemStore()

  const updateStorage = (updated: Partial<SystemFeatures>) => {
    void chrome.storage.local.set(updated)
  }

  const handleToggle = (key: keyof SystemFeatures) => {
    const currentValue = features[key]
    const newValue = !currentValue

    if (key === 'monochromatic') {
      if (!newValue) {
        updateStorage({
          monochromatic: false,
          monochromaticTimerEnabled: false,
          monochromaticExpiration: 0
        })
        return
      }
      updateStorage({ monochromatic: true })
      return
    }

    if (key === 'monochromaticTimerEnabled') {
      if (newValue) {
        const expiration = Date.now() + features.monochromaticTimerDuration * 60 * 1000
        updateStorage({
          monochromaticTimerEnabled: true,
          monochromaticExpiration: expiration
        })
        return
      }
      updateStorage({
        monochromaticTimerEnabled: false,
        monochromaticExpiration: 0
      })
      return
    }
  }

  const handleDurationChange = (minutes: number) => {
    const updates: Partial<SystemFeatures> = { monochromaticTimerDuration: minutes }
    if (features.monochromaticTimerEnabled) {
      updates.monochromaticExpiration = Date.now() + minutes * 60 * 1000
    }
    updateStorage(updates)
  }

  return { features, handleToggle, handleDurationChange }
}