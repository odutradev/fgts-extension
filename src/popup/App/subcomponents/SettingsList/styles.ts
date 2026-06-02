import { Paper, styled } from '@mui/material'

export const ListContainer = styled(Paper)({
    backgroundColor: 'transparent'
})

export const listItemStyles = {
    backgroundColor: '#fff',
    mb: 1,
    borderRadius: 2,
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    px: 2,
    py: 1
} as const