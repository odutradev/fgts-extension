import { Box, Typography, styled } from '@mui/material'

export const WaOptionRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingTop: '4px'
})

export const WaOptionLabel = styled(Typography)({
  fontSize: '0.72rem',
  color: '#aaaaaa',
  flex: 1
})
