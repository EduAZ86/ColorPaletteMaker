'use client'
import { useEffect } from 'react';
import { ITag } from '@/types/data';
import { HomeContainer } from './HomeContainer';
import { CardMapper } from '@/components/CardMapper';
import { SearchBarTags } from '@/components/SearchBarTags';
import { useDataPaletteStore } from '@/lib/store/dataPaletteStore';


export default function Home() {
  const { getPaletteForTag, clearPalettes, tagsToSend } = useDataPaletteStore()

  useEffect(() => {
    const arrayIDTags = tagsToSend.map((item: ITag) => item?._id)
    if (arrayIDTags.length > 0) {
      getPaletteForTag(arrayIDTags);
    }
    return () => {
      clearPalettes();
    }
  }, [tagsToSend])
  return (
    <HomeContainer>
      <div
        className={`
          w-full h-full
          flex flex-col
          gap-4
        `}
      >
        <SearchBarTags
          addTagButton={false}
        />
        <CardMapper />
      </div>
    </HomeContainer>
  )
}
