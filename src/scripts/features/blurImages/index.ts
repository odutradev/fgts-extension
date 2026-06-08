import manageScript from '@scripts/utils/manageScript'
import { injectStyle } from '@scripts/utils/injectStyle'
import { useFeaturesStore } from '@scripts/stores/features'

const STYLE_ID = 'fgts-blur-images'
const CSS = 'img { filter: blur(8px) !important; transition: filter 0.3s ease !important; } img:hover { filter: blur(0px) !important; }'

manageScript({
  name: 'blurImages',
  reactive: true,
  run: async () => {
    const { features } = useFeaturesStore.getState()
    const existing = document.getElementById(STYLE_ID)

    if (!features.blurImages) {
      existing?.remove()
      return true
    }

    if (!existing) injectStyle(STYLE_ID, CSS)
    return true
  }
})
