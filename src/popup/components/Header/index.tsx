import { MdShield } from 'react-icons/md'

import { HeaderContainer, Title } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <MdShield size={24} color="#1976d2" />
      <Title component="h1">FGTS Config</Title>
    </HeaderContainer>
  )
}