import { FeatureList } from '@popup/components/FeatureList'
import { Header } from '@popup/components/Header'
import { MainContainer, Separator } from './styles'

export const App = () => {
  return (
    <MainContainer component="main">
      <Header />
      <Separator />
      <FeatureList />
    </MainContainer>
  )
}
