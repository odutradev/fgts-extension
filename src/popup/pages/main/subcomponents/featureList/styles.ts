import { Box, Button, FormControlLabel, FormGroup, Typography, styled } from '@mui/material'

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

export const ActionButton = styled(Button)({
  minWidth: 'auto',
  padding: '4px',
  color: '#888888',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  '&:hover': {
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  }
})

export const TimerPanel = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '10px',
  borderRadius: '4px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.05)'
})

export const TimerRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const TimerLabel = styled(Typography)({
  fontSize: '0.75rem',
  fontWeight: 500,
  color: '#aaaaaa',
  textTransform: 'uppercase',
  fontFamily: 'monospace'
})

export const DurationContainer = styled(Box)({
  display: 'flex',
  gap: '6px',
  marginTop: '4px'
})

export const DurationPill = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active'
})<{ active?: boolean }>(({ active }) => ({
  flex: 1,
  fontSize: '0.65rem',
  fontFamily: 'monospace',
  padding: '4px 0',
  borderRadius: '4px',
  color: active ? '#000000' : '#888888',
  backgroundColor: active ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
  border: `1px solid ${active ? '#ffffff' : 'rgba(255, 255, 255, 0.05)'}`,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: active ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
    borderColor: active ? '#ffffff' : 'rgba(255, 255, 255, 0.1)'
  }
}))