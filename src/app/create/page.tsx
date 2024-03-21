'use client'
import React from "react";
import { CreateContainer } from "./styles.d";
import { CreatePaletteCard } from "@/components/CreatePaletteCard";
import { Typography } from "@/components/Typography";
import { PaletteColorForm } from "./PaletteColorForm";
import { useForm } from "react-hook-form";
import { SubmitButtonPalette } from "./SubmitButtonPalette";

const Create: React.FC = () => {
    const { handleSubmit, register } = useForm()

    const onSubmit = handleSubmit((data) => {

        console.log(data);
        
    })

    return (
        <CreateContainer>
            <Typography variant="caption">
                Crea tu paleta de colores
            </Typography>
            <PaletteColorForm
                handleSubmit={onSubmit}
            >
                <CreatePaletteCard
                    register={register}
                />
                <SubmitButtonPalette/>
            </PaletteColorForm>
        </CreateContainer>
    )
}
export default Create