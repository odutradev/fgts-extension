import { MdAllInclusive } from 'react-icons/md'
import { Switch } from '@mui/material'

import { FeatureCard, FeatureDescription, FeatureHeader, FeatureInfo, FeatureTitle, FeatureTitleContainer, ListContainer, TimerButton, TimerButtonGroup, SliderContainer, SliderHeader, SliderLabel, SliderValue, StyledSlider } from './styles'
import { FEATURE_METADATA, TIMER_DURATIONS } from './defaultData'
import { useFeatureToggle } from '@popup/hooks/useFeatureToggle'

import type { MouseEvent } from 'react'

export const FeatureList = () => {
  const { features, handleToggle, handleDurationChange, handleMinSizeChange } = useFeatureToggle()

  const timerValue = features.monochromaticTimerEnabled ? features.monochromaticTimerDuration : 0

  const handleTimerChange = (_: MouseEvent<HTMLElement>, value: number | null) => {
    if (value === null) return
    handleDurationChange(value)
  }

  const handleSliderChange = (_: Event, value: number | number[]) => {
    handleMinSizeChange(value as number)
  }

  return (
    <ListContainer>
      <FeatureCard>
        <FeatureHeader>
          <FeatureInfo>
            <FeatureTitleContainer>
              <FeatureTitle>{FEATURE_METADATA.monochromatic.label}</FeatureTitle>
            </FeatureTitleContainer>
            <FeatureDescription>{FEATURE_METADATA.monochromatic.description}</FeatureDescription>
          </FeatureInfo>
          <Switch
            checked={features.monochromatic}
            onChange={() => handleToggle('monochromatic')}
            size="small"
          />
        </FeatureHeader>
        <TimerButtonGroup value={timerValue} exclusive onChange={handleTimerChange}>
          {TIMER_DURATIONS.map(({ value, label }) => (
            <TimerButton key={value} value={value}>
              {label ?? <MdAllInclusive />}
            </TimerButton>
          ))}
        </TimerButtonGroup>
      </FeatureCard>
      <FeatureCard>
        <FeatureHeader>
          <FeatureInfo>
            <FeatureTitleContainer>
              <FeatureTitle>{FEATURE_METADATA.blurImages.label}</FeatureTitle>
            </FeatureTitleContainer>
            <FeatureDescription>{FEATURE_METADATA.blurImages.description}</FeatureDescription>
          </FeatureInfo>
          <Switch
            checked={features.blurImages}
            onChange={() => handleToggle('blurImages')}
            size="small"
          />
        </FeatureHeader>
        {features.blurImages && (
          <SliderContainer>
            <SliderHeader>
              <SliderLabel>Tamanho Mínimo</SliderLabel>
              <SliderValue>{features.blurImagesMinSize ?? 100}px</SliderValue>
            </SliderHeader>
            <StyledSlider
              value={features.blurImagesMinSize ?? 100}
              onChange={handleSliderChange}
              min={0}
              max={500}
              step={10}
              size="small"
            />
          </SliderContainer>
        )}
      </FeatureCard>
    </ListContainer>
  )
}