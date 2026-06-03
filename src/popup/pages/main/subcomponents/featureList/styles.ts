import { FormControlLabel, FormGroup, styled } from '@mui/material'

export const ListContainer = styled(FormGroup)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

export const FeatureItem = styled(FormControlLabel)({
  margin: '0 !important',
  width: '100%',
  justifyContent: 'space-between',
  padding: '12px 0',
})