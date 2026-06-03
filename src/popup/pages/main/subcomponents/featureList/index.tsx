import { Switch } from '@mui/material'

import { FeatureCard, FeatureDescription, FeatureHeader, FeatureInfo, FeatureTitle, FeatureTitleContainer, ListContainer } from './styles'
import { useFeatureToggle } from '@popup/hooks/useFeatureToggle'
import { FEATURE_METADATA } from './defaultData'

export const FeatureList = () => {
  const { features, handleToggle } = useFeatureToggle()

  return (
    <ListContainer>
      {Object.entries(features).map(([key, value]) => (
        <FeatureCard key={key}>
          <FeatureHeader>
            <FeatureInfo>
              <FeatureTitleContainer>
                <FeatureTitle>{FEATURE_METADATA[key]?.label ?? key}</FeatureTitle>
              </FeatureTitleContainer>
              <FeatureDescription>{FEATURE_METADATA[key]?.description}</FeatureDescription>
            </FeatureInfo>
            <Switch
              checked={Boolean(value)}
              onChange={() => handleToggle(key as keyof typeof features)}
              size="small"
            />
          </FeatureHeader>
        </FeatureCard>
      ))}
    </ListContainer>
  )
}
