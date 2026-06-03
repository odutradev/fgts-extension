import { sendMessageToActiveTab } from '@popup/services/chrome'
import { useSystemStore } from '@popup/stores/system'

export const useFeatureToggle = () => {
  const { features, toggleFeature } = useSystemStore()

  const handleToggle = (key: string) => {
    const newValue = !features[key]
    toggleFeature(key)
    void chrome.storage.local.set({ [key]: newValue })
    void sendMessageToActiveTab({ type: 'TOGGLE_FEATURE', key, value: newValue })
  }

  return { features, handleToggle }
}
