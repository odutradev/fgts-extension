import { MdShield } from 'react-icons/md'

import { HeaderContainer, Title } from '@/popup/App/subcomponents/Header/styles'

export const Header = () => (
    <HeaderContainer>
        <MdShield size={24} />
        <Title>Privacidade WA</Title>
    </HeaderContainer>
)