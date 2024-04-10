'use client'
import { CreateContainer } from "./styles.d";
import { CreatePaletteCard } from "@/components/CreatePaletteCard";
import { Typography } from "@/components/Typography";
import { PaletteColorForm } from "./PaletteColorForm";
import { useForm } from "react-hook-form";
import { SubmitButtonPalette } from "./SubmitButtonPalette";
import { SearchBar } from "@/components/SearchBar";
import { FC } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useDataPaletteStore } from "@/services/dataPaletteStore";

const Create: FC = () => {
    const { handleSubmit, register, reset, watch } = useForm()

    const { clearTagsToSend, tagsToSend } = useDataPaletteStore()

    const onSubmit = handleSubmit((data) => {

        if (
            data["color-1"] !== "#000000" &&
            data["color-2"] !== "#000000" &&
            data["color-3"] !== "#000000" &&
            data["color-4"] !== "#000000" &&
            data["color-5"] !== "#000000"
        ) {
            if (tagsToSend.length > 0) {
                toast.success('Pallet sent successfully');
                console.log(data);
                clearTagsToSend()
                reset()
            } else {
                toast.error('Select at least one tag')
            }
        } else {
            toast.error('Complete palette color');
        }

    })

    return (
        <CreateContainer>
            <Typography variant="subTitle">
                Create your color palette
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
            <Toaster />
        </CreateContainer>
    )
}
export default Create

