'use client'
import { FC } from 'react'
import { CreatePaletteContainer, InputsContainerProps } from './styles.tw'
import { InputColorPalette } from './ImputColorPalette'
import { ICreatePaletteCardProps } from './types'

export const CreatePaletteCard: FC<ICreatePaletteCardProps> = ({ register, watch }) => {
    const arrayColors: string[] = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5']
    return (
        <CreatePaletteContainer>
            <InputsContainerProps>
                <>
                    {arrayColors.map((item: string) => {
                        return (
                            <InputColorPalette
                                key={item}
                                id={`${item}-of-the-palette`}
                                name={item}
                                register={register}
                                watch={watch}
                            />
                        )
                    })}
                </>
            </InputsContainerProps>
        </CreatePaletteContainer>

    )
}
