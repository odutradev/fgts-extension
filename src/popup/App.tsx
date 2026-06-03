import { FeatureList } from '@/popup/components/FeatureList'
import { MainContainer, Separator } from './styles'
import { Header } from '@/popup/components/Header'

export const App = () => {
  return (
    <MainContainer component="main">
      <Header />
      <Separator />
      <FeatureList />
    </MainContainer>
  )
}