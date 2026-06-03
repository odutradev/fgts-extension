import { Switch } from '@mui/material'

import { useFeatureToggle } from '@popup/hooks/useFeatureToggle'
import { FeatureItem, ListContainer } from './styles'

import type { FeatureLabelMap } from './types'

const FEATURE_LABELS: FeatureLabelMap = {
  monochromatic: 'Monochromatic'
}

export const FeatureList = () => {
  const { features, handleToggle } = useFeatureToggle()

  return (
    <ListContainer>
      {Object.entries(features).map(([key, value]) => (
        <FeatureItem
          key={key}
          labelPlacement="start"
          control={<Switch checked={value} onChange={() => handleToggle(key)} size="small" />}
          label={FEATURE_LABELS[key] ?? key}
        />
      ))}
    </ListContainer>
  )
}
