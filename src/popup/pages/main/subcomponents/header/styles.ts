import { Box, Typography, styled } from '@mui/material'

export const HeaderContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const TitleGroup = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
})

export const IconWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff'
})

export const Title = styled(Typography)({
  fontSize: '0.85rem',
  fontWeight: 700,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#ffffff',
  fontFamily: 'monospace'
})

export const VersionBadge = styled(Typography)({
  fontSize: '0.65rem',
  fontFamily: 'monospace',
  letterSpacing: '0.06em',
  color: '#e0e0e0',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  padding: '3px 8px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '4px'
})