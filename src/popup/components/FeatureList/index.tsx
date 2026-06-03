import { FormControlLabel, Switch } from '@mui/material'

import { useFeatureStore } from '@/store/useFeatureStore'
import { ListContainer } from './styles'

export const FeatureList = () => {
  const { features, toggleFeature } = useFeatureStore()

  return (
    <ListContainer>
      {Object.entries(features).map(([key, value]) => (
        <FormControlLabel
          key={key}
          control={<Switch checked={value} onChange={() => toggleFeature(key)} />}
          label={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
        />
      ))}
    </ListContainer>
  )
}