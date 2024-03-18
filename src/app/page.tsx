import { CardMapper } from '@/components/CardMapper'
import { arrayPalettesTEST } from '@/constants/testPalettes'
import { HomeContainer } from './HomeContainer'

export default function Home() {

  return (
    <HomeContainer>
      <CardMapper
        arrayColorPalettes={arrayPalettesTEST}
      />
    </HomeContainer>
  )
}
