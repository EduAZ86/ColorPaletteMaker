'use client'
import CardMapper from '@/components/CardMapper'
import { arrayPalettesTEST } from '@/constants/testPalettes'





export default function Home() {
  
 
  return (
    <main className="
      flex w-full h-full flex-col justify-center items-center pl-0 pb-28
      md:pb-0 md:pl-5 md:pr-4
      ">
        <CardMapper
          arrayColorPalettes = {arrayPalettesTEST}
        />
    </main>
  )
}
