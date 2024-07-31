
import { FC } from 'react';
import { PaletteColorCard } from '../PaletteColorCard';
import { ICardMapperCollectionProps } from './types';
export const CardMapperColection:FC<ICardMapperCollectionProps>= ({
    arrayColorPalettes: paletteColor
}) => { 

    return (
        <div
            className='
            w-full h-full flex-col'
        >
            <div
                className={`
                flex flex-row flex-wrap gap-4 justify-center items-center
                pt-4
                pb-24 md:pb-4
            `}
            >
                {paletteColor.map((palette, index) => (
                    <PaletteColorCard
                        key={`${index}-${palette._id}`}
                        paletteColorProp={palette}
                    />
                ))}         
            </div>
        </div>
    )
}