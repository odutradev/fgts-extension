import letreiroBadge from '@assets/icons/icon.svg'

import { HeaderContainer, IconWrapper, TitleGroup, VersionBadge } from './styles'

export const Header = () => (
  <HeaderContainer>
    <TitleGroup>
      <IconWrapper>
        <img src={letreiroBadge} alt="" />
      </IconWrapper>
    </TitleGroup>
    <VersionBadge>v1.0.0</VersionBadge>
  </HeaderContainer>
)
