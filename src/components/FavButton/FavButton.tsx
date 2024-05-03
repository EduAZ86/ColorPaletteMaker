'use client'
import React, { useEffect, useState } from 'react';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';
import { IFavButtonProps } from './types';
import { ButtonComponent } from './styles.tw';
import { useColectionStore } from '@/services/colectionPalettesStore';
import { useDataPaletteStore } from '@/services/dataPaletteStore';

const FavButton: React.FC<IFavButtonProps> = ({ palette }) => {
    const [press, setPress] = useState<boolean>(false)
    const [isFav, setIsFav] = useState<boolean>(false)
    const { addToLocalColection, removeFromLocalStorage, LocalColection, getFavsToLocalStorage } = useColectionStore()
    const { updateSocialColorPalette } = useDataPaletteStore()

    useEffect(() => {
        if (LocalColection.length === 0) {
            getFavsToLocalStorage()
        }
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
            updateSocialColorPalette(palette._id, "disfav")
        } else {
            addToLocalColection(palette)
            updateSocialColorPalette(palette._id, "fav")
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
                {palette.social.favs}
            </span>
        </ButtonComponent>
    )
}

export default FavButton