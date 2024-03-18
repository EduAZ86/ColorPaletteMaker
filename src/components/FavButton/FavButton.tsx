'use client'
import { useFavoritesStore } from '@/store/favoritesStore';
import React, { useEffect, useState } from 'react';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import { IFavButtonProps } from './types';
import { ButtonComponent } from './styles.tw';

const FavButton: React.FC<IFavButtonProps> = ({ idPalette }) => {
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

    return (
        <ButtonComponent
            handleClick={handlePress}
            isFav={isFav}
        >
            {isFav ? <BiSolidHeart /> : <BiHeart />}
            <span className='
                text-xs text-light-font
                dark:text-dark-font
            '
            >
                432
            </span>
        </ButtonComponent>
    )
}

export default FavButton