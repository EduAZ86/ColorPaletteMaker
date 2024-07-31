"use client"
import { CardMapper } from '@/components/CardMapper'
import { useColectionStore } from '@/lib/store/colectionPalettesStore'
import { IColorPallete } from '@/types/data'

import React, { useEffect } from 'react'

const Colection: React.FC = () => {

  const { LocalColection, getFavsToLocalStorage, clearLocalColection } = useColectionStore()

  useEffect(() => {
    getFavsToLocalStorage()
    return () => {
      clearLocalColection()
    }
  }, [])


  return (
    <main className="
        flex w-full h-full flex-col justify-center items-center pl-0 pb-28
        md:pb-0 md:pl-5 md:pr-4
        ">
      {LocalColection && LocalColection.length > 0 && <CardMapper arrayColorPalettes={LocalColection as IColorPallete[]} />}
    </main>
  )
}

export default Colection