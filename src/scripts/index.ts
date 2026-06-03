const MONOCHROMATIC_STYLE_ID = 'fgts-monochromatic'

type ContentScriptMessage = {
  type: string
  key: string
  value: boolean
}

const applyMonochromaticFilter = (enabled: boolean) => {
  const existing = document.getElementById(MONOCHROMATIC_STYLE_ID)

  if (enabled && !existing) {
    const style = document.createElement('style')
    style.id = MONOCHROMATIC_STYLE_ID
    style.textContent = 'html { filter: grayscale(100%) !important; }'
    document.head?.appendChild(style)
    return
  }

  existing?.remove()
}

chrome.storage.local.get('monochromatic', (result) => {
  applyMonochromaticFilter(Boolean(result['monochromatic']))
})

chrome.runtime.onMessage.addListener((message: ContentScriptMessage) => {
  if (message.type !== 'TOGGLE_FEATURE' || message.key !== 'monochromatic') return
  applyMonochromaticFilter(message.value)
})
