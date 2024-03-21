'use client'
import React from 'react';
import { ICardMapperProps } from './types';
import { CardMapperContainer } from './styles.tw';
import { PaletteColorCard } from '../PaletteColorCard';

export const CardMapper: React.FC<ICardMapperProps> = ({ arrayColorPalettes }) => {

    return (
        <CardMapperContainer
        >
            {arrayColorPalettes
                ?
                arrayColorPalettes.map((item) => {
                    return (
                        <PaletteColorCard
                            key={item.idColors}
                            paletteColorProp={item}
                        />
                    )
                })
                : <></>
            }
        </CardMapperContainer>
    )
}