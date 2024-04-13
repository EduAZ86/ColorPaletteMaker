'use client'
import { CardMapper } from '@/components/CardMapper';
import { HomeContainer } from './HomeContainer';
import { useDataPaletteStore } from '@/services/dataPaletteStore';
import { useObserver } from '@/hooks/useObserver';

export default function Home() {
  const { paletteColor, getAllPaletteForPage } = useDataPaletteStore()
  const { elementRef, } = useObserver({
    threshold: 0.5,
    calbackFunctionObserver: getAllPaletteForPage
  })

  return (
    <HomeContainer>
      <div
        ref={elementRef}
      >
        <CardMapper
          arrayColorPalettes={paletteColor}
        />
      </div>
    </HomeContainer>
  )
}
