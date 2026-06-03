import { Switch } from '@mui/material'

import { useSystemStore } from '@popup/stores/system'
import type { FeatureLabelMap } from './types'
import { FeatureItem, ListContainer } from './styles'

const FEATURE_LABELS: FeatureLabelMap = {
  blockAds: 'Block Ads',
  darkTheme: 'Dark Theme',
  analytics: 'Analytics'
}

export const FeatureList = () => {
  const { features, toggleFeature } = useSystemStore()

  return (
    <ListContainer>
      {Object.entries(features).map(([key, value]) => (
        <FeatureItem
          key={key}
          labelPlacement="start"
          control={<Switch checked={value} onChange={() => toggleFeature(key)} size="small" />}
          label={FEATURE_LABELS[key] ?? key}
        />
      ))}
    </ListContainer>
  )
}
