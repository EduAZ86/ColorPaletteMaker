import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex bg-blend-color-burn'>
        <span className='font-roboto z-20 bg-red-300'>nuevo proyecto en next.js, tailwind y typescript</span>
      </div>
    </main>
  )
}
