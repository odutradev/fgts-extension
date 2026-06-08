import { Box, FormGroup, ToggleButton, ToggleButtonGroup, Typography, Slider, styled } from '@mui/material'

export const ListContainer = styled(FormGroup)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '12px'
})

export const FeatureCard = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '6px',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  padding: '12px',
  gap: '8px'
})

export const FeatureHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
})

export const FeatureInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  flex: 1,
  paddingRight: '8px'
})

export const FeatureTitleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
})

export const FeatureTitle = styled(Typography)({
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#ffffff',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  fontFamily: 'monospace'
})

export const FeatureDescription = styled(Typography)({
  fontSize: '0.7rem',
  color: '#888888',
  lineHeight: 1.4
})

export const TimerButtonGroup = styled(ToggleButtonGroup)({
  display: 'flex',
  width: '100%',
  gap: '6px',
  '& .MuiToggleButtonGroup-grouped': {
    flex: 1,
    margin: '0 !important',
    border: '1px solid rgba(255, 255, 255, 0.05) !important',
    borderRadius: '4px !important'
  }
})

export const TimerButton = styled(ToggleButton)({
  flex: 1,
  fontSize: '0.65rem',
  fontFamily: 'monospace',
  padding: '5px 0',
  color: '#888888',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  minWidth: 'auto',
  textTransform: 'none',
  '& svg': {
    fontSize: '0.9rem'
  },
  '&.Mui-selected': {
    color: '#000000',
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#e0e0e0'
    }
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)'
  }
})

export const SliderContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  padding: '4px 4px 0 4px',
  marginTop: '4px'
})

export const SliderHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const SliderLabel = styled(Typography)({
  fontSize: '0.7rem',
  color: '#888888'
})

export const SliderValue = styled(Typography)({
  fontSize: '0.7rem',
  fontWeight: 600,
  color: '#ffffff',
  fontFamily: 'monospace'
})

export const StyledSlider = styled(Slider)({
  color: '#ffffff',
  height: 4,
  padding: '10px 0',
  '& .MuiSlider-thumb': {
    height: 12,
    width: 12,
    backgroundColor: '#ffffff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit'
    }
  },
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: '#ffffff'
  },
  '& .MuiSlider-rail': {
    opacity: 0.2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  }
})