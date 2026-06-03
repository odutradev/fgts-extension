import LetreiroBadge from '@assets/icons/letreiro.svg'

import { HeaderContainer, IconWrapper, TitleGroup, VersionBadge } from './styles'

export const Header = () => (
  <HeaderContainer>
    <TitleGroup>
      <IconWrapper>
        <LetreiroBadge />
      </IconWrapper>
    </TitleGroup>
    <VersionBadge>v1.0.0</VersionBadge>
  </HeaderContainer>
)
