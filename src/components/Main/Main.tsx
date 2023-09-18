'use client'
import React from 'react'
import NavBar from '../NavBar/NavBar'

const Main = ({children}: {children: React.ReactNode})  => {

    return(
        <div className='flex'>
            <NavBar />
            <span className='fixed w-screen h-screen -z-10'/>
            <div className='h-screen w-screen flex pl-0 md:pl-40 pb-16 md:pb-0'>
                {children}
            </div>

        </div>
    )
}

export default Main