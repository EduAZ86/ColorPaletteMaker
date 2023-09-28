'use client'

import React, { useState } from 'react'
import {BiHeart, BiSolidHeart} from 'react-icons/bi'


const FavButton:React.FC = () => {
    const [press, setPress] = useState<boolean>(false)

    const handlePress = () => {
        setPress(!press)
    }

    return(
        <button 
            className={`
                flex flex-row w-fit py-2 px-2 rounded-md gap-2 ${press && 'shadow-current-button dark:shadow-dark-current-button'}
            `}
            onClick={() => handlePress()}
        >
            {press? <BiSolidHeart/> : <BiHeart/>}
            <span className='
                text-xs text-light-font
                dark:text-dark-font
            '                
            >
                432
            </span>
        </button>
    )
}

export default FavButton