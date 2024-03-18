'use client'
import React from 'react';
import { ICardMapperProps } from './types';
import PaletteColorCard from '../PaletteColorCard';
import { CardMapperContainer } from './styles.tw';

export const CardMapper: React.FC<ICardMapperProps> = ({ arrayColorPalettes }) => {

    return(
        <CardMapperContainer            
        >
            {arrayColorPalettes.map(( item ) => {
                return(
                    <PaletteColorCard
                        key={item.idColors}
                        paletteColorProp = {item}
                    />
                )
            })}
        </CardMapperContainer>
    )
}