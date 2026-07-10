import { Box, Button, styled } from '@mui/material'

export const UploadButton = styled(Button)({
  border: '1px dashed rgba(255, 255, 255, 0.15)',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  textTransform: 'none',
  borderRadius: '4px',
  color: '#aaaaaa',
  fontSize: '0.72rem',
  padding: '6px 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  width: '100%',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.25)'
  }
})

export const PreviewContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '4px',
  padding: '6px 10px',
  width: '100%'
})

export const ImagePreview = styled('img')({
  width: '32px',
  height: '32px',
  objectFit: 'cover',
  borderRadius: '3px',
  border: '1px solid rgba(255, 255, 255, 0.1)'
})

export const DeleteButton = styled(Button)({
  minWidth: 'auto',
  padding: '4px 8px',
  color: '#ff4444',
  '&:hover': {
    backgroundColor: 'rgba(255, 68, 68, 0.1)'
  }
})