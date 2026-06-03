const MONOCHROMATIC_STYLE_ID = 'fgts-monochromatic'
const BLUR_IMAGES_STYLE_ID = 'fgts-blur-images'
let timerId: number | null = null

const injectStyle = (id: string, css: string) => {
  const style = document.createElement('style')
  const target = document.head ?? document.documentElement
  style.id = id
  style.textContent = css
  target.appendChild(style)
}

const applyMonochromaticFilter = (enabled: boolean) => {
  const existing = document.getElementById(MONOCHROMATIC_STYLE_ID)
  if (!enabled) {
    existing?.remove()
    return
  }
  if (existing) return
  injectStyle(MONOCHROMATIC_STYLE_ID, 'html { filter: grayscale(100%) !important; }')
}

const applyBlurImagesFilter = (enabled: boolean) => {
  const existing = document.getElementById(BLUR_IMAGES_STYLE_ID)
  if (!enabled) {
    existing?.remove()
    return
  }
  if (existing) return
  injectStyle(BLUR_IMAGES_STYLE_ID, 'img { filter: blur(8px) !important; }')
}

const handleTimerSetup = (enabled: boolean, timerEnabled: boolean, expiration: number) => {
  if (timerId) {
    clearTimeout(timerId)
    timerId = null
  }

  if (!enabled || !timerEnabled || !expiration) return

  const remaining = expiration - Date.now()

  if (remaining <= 0) {
    void chrome.storage.local.set({ monochromatic: false, monochromaticTimerEnabled: false, monochromaticExpiration: 0 })
    return
  }

  timerId = setTimeout(() => {
    void chrome.storage.local.set({ monochromatic: false, monochromaticTimerEnabled: false, monochromaticExpiration: 0 })
  }, remaining) as unknown as number
}

const STORAGE_KEYS = ['monochromatic', 'monochromaticTimerEnabled', 'monochromaticExpiration', 'blurImages']

const applyAllFeatures = (result: { [key: string]: unknown }) => {
  const enabled = Boolean(result['monochromatic'])
  const timerEnabled = Boolean(result['monochromaticTimerEnabled'])
  const expiration = Number(result['monochromaticExpiration'] ?? 0)
  const blurImages = Boolean(result['blurImages'])

  applyMonochromaticFilter(enabled)
  handleTimerSetup(enabled, timerEnabled, expiration)
  applyBlurImagesFilter(blurImages)
}

chrome.storage.local.get(STORAGE_KEYS, applyAllFeatures)

chrome.storage.onChanged.addListener((_, namespace) => {
  if (namespace !== 'local') return
  chrome.storage.local.get(STORAGE_KEYS, applyAllFeatures)
})
