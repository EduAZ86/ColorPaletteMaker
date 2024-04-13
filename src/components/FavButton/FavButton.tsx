'use client'
import React, { useEffect, useState } from 'react';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import { IFavButtonProps } from './types';
import { ButtonComponent } from './styles.tw';
import { useColectionStore } from '@/services/colectionPalettesStore';

const FavButton: React.FC<IFavButtonProps> = ({ palette }) => {
    const [press, setPress] = useState<boolean>(false)
    const [isFav, setIsFav] = useState<boolean>(false)
    const { addToLocalColection, removeFromLocalStorage, LocalColection } = useColectionStore()

    useEffect(() => {
        if (LocalColection.find(paletteColor => paletteColor._id === palette._id)) {
            setIsFav(true)
        } else {
            setIsFav(false)
        }
    }, [press])

    const handlePress = () => {
        setPress(!press)
        if (LocalColection.find(paletteColor => paletteColor._id === palette._id)) {
            removeFromLocalStorage(palette._id)
        } else {
            addToLocalColection(palette)
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