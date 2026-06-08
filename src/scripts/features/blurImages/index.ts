import { useFeaturesStore } from '@scripts/stores/features'
import { injectStyle } from '@scripts/utils/injectStyle'
import manageScript from '@scripts/utils/manageScript'

const STYLE_ID = 'fgts-blur-images'
const CSS = 'img[data-fgts-blur="true"] { filter: blur(8px) !important; transition: filter 0.3s ease !important; } img[data-fgts-blur="true"]:hover { filter: blur(0px) !important; }'

let observer: MutationObserver | null = null

const cleanup = () => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
  document.querySelectorAll('img[data-fgts-blur="true"]').forEach((img) => {
    img.removeAttribute('data-fgts-blur')
  })
}

const checkImage = (img: HTMLImageElement, minSize: number) => {
  const width = Math.max(img.naturalWidth, img.clientWidth, img.width)
  const height = Math.max(img.naturalHeight, img.clientHeight, img.height)
  if (width > minSize || height > minSize) {
    img.setAttribute('data-fgts-blur', 'true')
  } else {
    img.removeAttribute('data-fgts-blur')
  }
}

const processImage = (img: HTMLImageElement, minSize: number) => {
  if (img.complete) {
    checkImage(img, minSize)
  } else {
    img.addEventListener('load', () => checkImage(img, minSize), { once: true })
  }
}

manageScript({
  name: 'blurImages',
  reactive: true,
  run: async () => {
    const { features } = useFeaturesStore.getState()
    const existing = document.getElementById(STYLE_ID)

    cleanup()

    if (!features.blurImages) {
      existing?.remove()
      return true
    }

    if (!existing) {
      injectStyle(STYLE_ID, CSS)
    }

    const minSize = features.blurImagesMinSize ?? 100

    document.querySelectorAll('img').forEach((img) => {
      processImage(img, minSize)
    })

    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLImageElement) {
            processImage(node, minSize)
          } else if (node instanceof HTMLElement) {
            node.querySelectorAll('img').forEach((img) => {
              processImage(img, minSize)
            })
          }
        }
      }
    })

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    })

    return true
  }
})