import ColorCard from '@/components/ColorCard'
import PaletteColor from '@/components/PaletteColor'
import PaletteColorCard from '@/components/PaletteColorCard'
import { hexToRgb } from '@/utils/colorsCalculator'


export default function Home() {
  const rgbColor = `(${hexToRgb('#CA3E47')})`
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex bg-blend-color-burn'>
        <span className='font-roboto z-20 bg-red-300'>nuevo proyecto en next.js, tailwind y typescript</span>
        <br/>
      </div>
        <PaletteColorCard/>
    </main>
  )
}
