const MONOCHROMATIC_STYLE_ID = 'fgts-monochromatic'

type ContentScriptMessage = {
  type: string
  key: string
  value: boolean
}

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

chrome.storage.local.get('monochromatic', (result) => {
  applyMonochromaticFilter(Boolean(result['monochromatic']))
})

chrome.runtime.onMessage.addListener((message: ContentScriptMessage) => {
  if (message.type !== 'TOGGLE_FEATURE' || message.key !== 'monochromatic') return
  applyMonochromaticFilter(message.value)
})
