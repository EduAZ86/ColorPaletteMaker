'use client'
import React from "react";
import { CreateContainer } from "./styles.d";
import { CreatePaletteCard } from "@/components/CreatePaletteCard";
import { Typography } from "@/components/Typography";
import { PaletteColorForm } from "./PaletteColorForm";
import { useForm } from "react-hook-form";
import { SubmitButtonPalette } from "./SubmitButtonPalette";
import { SearchBar } from "@/components/SearchBar";

const Create: React.FC = () => {
    const { handleSubmit, register, reset, watch } = useForm()

    const onSubmit = handleSubmit((data) => {

        console.log(data);
        reset()

    })

    return (
        <CreateContainer>
            <Typography variant="subTitle">
                Crea tu paleta de colores
            </Typography>
            <PaletteColorForm
                handleSubmit={onSubmit}
            >
                <CreatePaletteCard
                    register={register}
                    watch={watch}
                />
                <SubmitButtonPalette />
                <SearchBar />
            </PaletteColorForm>
        </CreateContainer>
    )
}
export default Create