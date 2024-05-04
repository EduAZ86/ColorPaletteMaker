'use client'
import { FC, useEffect, useState } from "react";
import { CreateTagContainer, InputsContainerProps } from "./styles.d";
import { ICreateTagProps } from "./types";
import { InputColorTag } from "./InputColorTag";
import { Typography } from "../Typography";
import { useForm } from "react-hook-form";

export const CreateTag: FC<ICreateTagProps> = () => {
    const { setValue, register, watch } = useForm();
    const colectionName = 'colection'
    useEffect(() => {
        if (watch(colectionName)) {
            setValue('color-name-tag', 'transparent')

        }
        return () => {
        }
    }, [watch(colectionName)])

    return (
        <CreateTagContainer>
            <InputsContainerProps>
                <InputColorTag
                    register={register}
                    watch={watch}
                />
                <div className={`
                    flex flex-col
                    items-center
                    justify-center
                    gap-4
                `}>
                    <Typography variant="label">{colectionName}</Typography>
                    <input
                        type="checkbox"
                        {...register(colectionName)}
                    />
                </div>
            </InputsContainerProps>
        </CreateTagContainer>
    )
}