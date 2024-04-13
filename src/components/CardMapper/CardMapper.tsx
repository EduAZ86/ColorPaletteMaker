'use client'
import React from 'react';
import { ICardMapperProps } from './types';
import { CardMapperContainer } from './styles.tw';
import { PaletteColorCard } from '../PaletteColorCard';
import { IColorPallete } from '@/types/data';

export const CardMapper: React.FC<ICardMapperProps> = ({ arrayColorPalettes }) => {

    return (
        <CardMapperContainer
        >
            {arrayColorPalettes
                ?
                arrayColorPalettes.map((palette: IColorPallete) => {
                    return (
                        <PaletteColorCard
                            key={palette.idColors}
                            paletteColorProp={palette}
                        />
                    )
                })
                : <></>
            }
        </CardMapperContainer>
    )
}