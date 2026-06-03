import { useSystemStore } from '@popup/stores/system'

export const useFeatureToggle = () => {
  const { features } = useSystemStore()
  const handleToggle = (key: string) => {
    const newValue = !features[key]
    void chrome.storage.local.set({ [key]: newValue })
  }
  return { features, handleToggle }
}