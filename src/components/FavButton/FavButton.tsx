'use client'
import { useFavoritesStore } from '@/store/favoritesStore'
import React, { useEffect, useState } from 'react'
import {BiHeart, BiSolidHeart} from 'react-icons/bi'

interface FavButtonProps {
    idPalette:string
}



const FavButton:React.FC<FavButtonProps> = ({idPalette}) => {
    const [press, setPress] = useState<boolean>(false)
    const [isFav, setIsFav] = useState<boolean>(false)

    const addFav = useFavoritesStore((state) => state.add_fav)
    const removeFav = useFavoritesStore((state) => state.remove_fav)
    const allFavs = useFavoritesStore((state) => state.palette_favs)

    useEffect(() => {
        if (allFavs.includes(idPalette)) {
            setIsFav(true) 
        } else {
            setIsFav(false)   
        }
    }, [press])

    const handlePress = () => {
        setPress(!press)
        if (allFavs.includes(idPalette)) {
            removeFav(idPalette)
        } else {
            addFav(idPalette)
        }
    }

    return(
        <button 
            className={`
                flex flex-row w-fit py-2 px-2 rounded-md gap-2 ${isFav && 'shadow-current-button dark:shadow-dark-current-button'}
            `}
            onClick={() => handlePress()}
        >
            {isFav? <BiSolidHeart/> : <BiHeart/>}
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