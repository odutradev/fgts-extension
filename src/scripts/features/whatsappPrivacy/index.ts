import { useFeaturesStore } from '@scripts/stores/features'
import { injectStyle } from '@scripts/utils/injectStyle'
import { STYLE_ID, WA_PRIVACY_CSS } from './styles'

type WaFeatureKey = 'waBlurMessages' | 'waBlurPreviews' | 'waBlurNames' | 'waBlurPhotos' | 'waBlurStickers'

const CLASS_MAP: Record<WaFeatureKey, string> = {
  waBlurMessages: 'wa-blur-msgs',
  waBlurPreviews: 'wa-blur-previews',
  waBlurNames: 'wa-blur-names',
  waBlurPhotos: 'wa-blur-photos',
  waBlurStickers: 'wa-blur-stickers'
}

const WA_KEYS = Object.keys(CLASS_MAP) as WaFeatureKey[]

const run = () => {
  const { body } = document
  if (!body) return

  const { features } = useFeaturesStore.getState()
  const hasAny = WA_KEYS.some(key => features[key])

  if (!hasAny) {
    document.getElementById(STYLE_ID)?.remove()
    WA_KEYS.forEach(key => body.classList.remove(CLASS_MAP[key]))
    return
  }

  if (!document.getElementById(STYLE_ID)) injectStyle(STYLE_ID, WA_PRIVACY_CSS)

  WA_KEYS.forEach(key => body.classList.toggle(CLASS_MAP[key], features[key]))
}

if (window.location.hostname === 'web.whatsapp.com') {
  useFeaturesStore.subscribe(run)
  document.addEventListener('DOMContentLoaded', run, { once: true })
  run()
}