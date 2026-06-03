import { MdShield } from 'react-icons/md'

import { HeaderContainer, IconWrapper, Title, TitleGroup, VersionBadge } from './styles'

export const Header = () => (
  <HeaderContainer>
    <TitleGroup>
      <IconWrapper>
        <MdShield size={15} />
      </IconWrapper>
      <Title>FGTS</Title>
    </TitleGroup>
    <VersionBadge>v1.0.0</VersionBadge>
  </HeaderContainer>
)
