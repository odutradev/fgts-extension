import type { ExtensionMessage } from './types'

export const sendMessageToActiveTab = async (message: ExtensionMessage): Promise<void> => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  if (!tab?.id) return
  try {
    await chrome.tabs.sendMessage(tab.id, message)
  } catch {}
}
