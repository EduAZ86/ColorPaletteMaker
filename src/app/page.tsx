import CardMapper from '@/components/CardMapper'
import ColorCard from '@/components/ColorCard'
import PaletteColor from '@/components/PaletteColor'
import PaletteColorCard from '@/components/PaletteColorCard'
import { arrayPalettesTEST } from '@/constants/testPalettes'
import { hexToRgb } from '@/utils/colorsCalculator'



export default function Home() {
  const rgbColor = `(${hexToRgb('#CA3E47')})`
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
