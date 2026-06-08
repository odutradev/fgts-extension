import { useSystemStore } from '@popup/stores/system'

import type { SystemFeatures } from '@popup/stores/system/types'

export const useFeatureToggle = () => {
  const { features } = useSystemStore()

  const updateStorage = (updated: Partial<SystemFeatures>) => {
    void chrome.storage.local.set(updated)
  }

  const handleToggle = (key: keyof SystemFeatures) => {
    const newValue = !features[key]

    if (key === 'monochromatic') {
      if (!newValue) {
        updateStorage({ monochromatic: false, monochromaticTimerEnabled: false, monochromaticExpiration: 0 })
        return
      }
      updateStorage({ monochromatic: true })
      return
    }

    updateStorage({ [key]: newValue } as Partial<SystemFeatures>)
  }

  const handleDurationChange = (minutes: number) => {
    if (minutes === 0) {
      updateStorage({ monochromaticTimerEnabled: false, monochromaticExpiration: 0 })
      return
    }
    updateStorage({
      monochromaticTimerDuration: minutes,
      monochromaticTimerEnabled: true,
      monochromaticExpiration: Date.now() + minutes * 60 * 1000
    })
  }

  const handleMinSizeChange = (size: number) => {
    updateStorage({ blurImagesMinSize: size })
  }

  return { features, handleToggle, handleDurationChange, handleMinSizeChange }
}