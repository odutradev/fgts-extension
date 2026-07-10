import { useFeaturesStore } from '@scripts/stores/features'
import manageScript from '@scripts/utils/manageScript'

let isListenerAdded = false

const handleKeyDown = (e: KeyboardEvent) => {
  if (!(e.ctrlKey && e.key.toLowerCase() === 'i')) return

  const { features } = useFeaturesStore.getState()
  if (!features.shortcutImage || !features.shortcutImageUrl) return

  e.preventDefault()

  const existing = document.getElementById('fgts-shortcut-image-overlay')
  if (existing) {
    existing.remove()
    return
  }

  const overlay = document.createElement('div')
  overlay.id = 'fgts-shortcut-image-overlay'
  overlay.style.position = 'fixed'
  overlay.style.top = '0'
  overlay.style.left = '0'
  overlay.style.width = '100vw'
  overlay.style.height = '100vh'
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)'
  overlay.style.display = 'flex'
  overlay.style.alignItems = 'center'
  overlay.style.justifyContent = 'center'
  overlay.style.zIndex = '999999999'
  overlay.style.cursor = 'pointer'
  overlay.style.userSelect = 'none'

  const img = document.createElement('img')
  img.src = features.shortcutImageUrl
  img.style.maxWidth = '90%'
  img.style.maxHeight = '90%'
  img.style.objectFit = 'contain'
  img.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)'
  img.style.borderRadius = '8px'
  img.style.cursor = 'default'

  overlay.appendChild(img)
  overlay.addEventListener('click', () => overlay.remove())

  const handleEscape = (escapeEvent: KeyboardEvent) => {
    if (escapeEvent.key === 'Escape') {
      overlay.remove()
      document.removeEventListener('keydown', handleEscape)
    }
  }
  document.addEventListener('keydown', handleEscape)

  document.body.appendChild(overlay)
}

manageScript({
  name: 'shortcutImage',
  reactive: true,
  run: async () => {
    const { features } = useFeaturesStore.getState()

    if (!features.shortcutImage) {
      if (isListenerAdded) {
        window.removeEventListener('keydown', handleKeyDown)
        isListenerAdded = false
      }
      const existing = document.getElementById('fgts-shortcut-image-overlay')
      if (existing) existing.remove()
      return true
    }

    if (!isListenerAdded) {
      window.addEventListener('keydown', handleKeyDown)
      isListenerAdded = true
    }

    return true
  }
})