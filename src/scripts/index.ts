const MONOCHROMATIC_STYLE_ID = 'fgts-monochromatic'
let timerId: number | null = null

const applyMonochromaticFilter = (enabled: boolean) => {
  const existing = document.getElementById(MONOCHROMATIC_STYLE_ID)
  if (!enabled) {
    existing?.remove()
    return
  }
  if (existing) return
  const style = document.createElement('style')
  const target = document.head ?? document.documentElement
  style.id = MONOCHROMATIC_STYLE_ID
  style.textContent = 'html { filter: grayscale(100%) !important; }'
  target.appendChild(style)
}

const handleTimerSetup = (enabled: boolean, timerEnabled: boolean, expiration: number) => {
  if (timerId) {
    clearTimeout(timerId)
    timerId = null
  }

  if (!enabled || !timerEnabled || !expiration) return

  const remaining = expiration - Date.now()

  if (remaining <= 0) {
    void chrome.storage.local.set({
      monochromatic: false,
      monochromaticTimerEnabled: false,
      monochromaticExpiration: 0
    })
    return
  }

  timerId = setTimeout(() => {
    void chrome.storage.local.set({
      monochromatic: false,
      monochromaticTimerEnabled: false,
      monochromaticExpiration: 0
    })
  }, remaining) as unknown as number
}

chrome.storage.local.get(['monochromatic', 'monochromaticTimerEnabled', 'monochromaticExpiration'], (result) => {
  const enabled = Boolean(result['monochromatic'])
  const timerEnabled = Boolean(result['monochromaticTimerEnabled'])
  const expiration = Number(result['monochromaticExpiration'] ?? 0)

  applyMonochromaticFilter(enabled)
  handleTimerSetup(enabled, timerEnabled, expiration)
})

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace !== 'local') return

  chrome.storage.local.get(['monochromatic', 'monochromaticTimerEnabled', 'monochromaticExpiration'], (result) => {
    const enabled = Boolean(result['monochromatic'])
    const timerEnabled = Boolean(result['monochromaticTimerEnabled'])
    const expiration = Number(result['monochromaticExpiration'] ?? 0)

    applyMonochromaticFilter(enabled)
    handleTimerSetup(enabled, timerEnabled, expiration)
  })
})