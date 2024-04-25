'use client'
import { CardMapper } from '@/components/CardMapper';
import { HomeContainer } from './HomeContainer';
import { useDataPaletteStore } from '@/services/dataPaletteStore';
import { useObserver } from '@/hooks/useObserver';
import { useEffect } from 'react';

export default function Home() {
  const { paletteColor, getAllPaletteForPage } = useDataPaletteStore()
  useEffect(() => {

    getAllPaletteForPage()

    return () => {

    }
  }, [])



  return (
    <HomeContainer>
      <div

      >
        <CardMapper
          arrayColorPalettes={paletteColor}
        />
      </div>
    </HomeContainer>
  )
}
