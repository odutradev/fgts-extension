import { Switch } from '@mui/material'

import { FeatureCard, FeatureDescription, FeatureHeader, FeatureInfo, FeatureTitle, FeatureTitleContainer } from '../../styles'
import { useFeatureToggle } from '@popup/hooks/useFeatureToggle'
import { WA_FEATURE_OPTIONS } from './defaultData'
import { WaOptionLabel, WaOptionRow } from './styles'

export const WaPrivacyCard = () => {
  const { features, handleToggle } = useFeatureToggle()

  return (
    <FeatureCard>
      <FeatureHeader>
        <FeatureInfo>
          <FeatureTitleContainer>
            <FeatureTitle>Privacidade WA</FeatureTitle>
          </FeatureTitleContainer>
          <FeatureDescription>Borra conteúdos no WhatsApp Web</FeatureDescription>
        </FeatureInfo>
      </FeatureHeader>
      {WA_FEATURE_OPTIONS.map(({ key, label }) => (
        <WaOptionRow key={key}>
          <WaOptionLabel>{label}</WaOptionLabel>
          <Switch
            checked={features[key]}
            onChange={() => handleToggle(key)}
            size="small"
          />
        </WaOptionRow>
      ))}
    </FeatureCard>
  )
}
