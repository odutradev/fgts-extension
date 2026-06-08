import manageScript from '@scripts/utils/manageScript'
import { injectStyle } from '@scripts/utils/injectStyle'
import { useFeaturesStore } from '@scripts/stores/features'

const STYLE_ID = 'fgts-monochromatic'
const CSS = 'html { filter: grayscale(100%) !important; }'
let timerId: number | null = null

const clearTimer = () => {
  if (!timerId) return
  clearTimeout(timerId)
  timerId = null
}

const disableMonochromatic = () => {
  void chrome.storage.local.set({
    monochromatic: false,
    monochromaticTimerEnabled: false,
    monochromaticExpiration: 0
  })
}

const setupTimer = (expiration: number) => {
  clearTimer()
  const remaining = expiration - Date.now()
  if (remaining <= 0) {
    disableMonochromatic()
    return
  }
  timerId = setTimeout(disableMonochromatic, remaining) as unknown as number
}

manageScript({
  name: 'monochromatic',
  reactive: true,
  run: async () => {
    const { features } = useFeaturesStore.getState()
    const existing = document.getElementById(STYLE_ID)

    if (!features.monochromatic) {
      existing?.remove()
      clearTimer()
      return true
    }

    if (!existing) injectStyle(STYLE_ID, CSS)

    if (features.monochromaticTimerEnabled && features.monochromaticExpiration) {
      setupTimer(features.monochromaticExpiration)
    } else {
      clearTimer()
    }

    return true
  }
})
