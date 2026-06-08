import { useFeaturesStore } from '@scripts/stores/features'

import type { ManageScriptData } from './types'

const manageScript = ({ name, run, reactive = false }: ManageScriptData) => {
  let lastUrl = ''
  let isRunning = false

  const checkAndRun = async () => {
    const currentUrl = window.location.href

    if (!reactive) {
      if (currentUrl === lastUrl) return
      const state = useFeaturesStore.getState()
      if (!state.features[name]) return
    }

    if (isRunning) return
    isRunning = true

    try {
      const status = await run()
      if (status && !reactive) lastUrl = currentUrl
    } finally {
      isRunning = false
    }
  }

  useFeaturesStore.subscribe(checkAndRun)
  checkAndRun()

  if (!reactive) setInterval(checkAndRun, 1500)
}

export default manageScript
