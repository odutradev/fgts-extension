import { MdShield } from 'react-icons/md'

import { HeaderContainer, Title } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <MdShield size={24} color="#1976d2" />
      <Title >FGTS Config</Title>
    </HeaderContainer>
  )
}