import { Box, Typography, styled } from '@mui/material'

export const HeaderContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: '#008069'
})

export const Title = styled(Typography)({
    fontSize: '18px',
    fontWeight: 600,
    margin: 0
})