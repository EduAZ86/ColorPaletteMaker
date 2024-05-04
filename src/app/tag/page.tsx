'use client'
import { FC } from "react";
import { CreateTagContainer } from "./styles.d";
import { Typography } from "@/components/Typography";
import { CreateTagForm } from "./CreateTagForm";
import { useForm } from "react-hook-form";
import { CreateTag } from "@/components/CreateTag/CreateTag";
import { SubmitButtonTag } from "@/components/CreateTag/SubmitButtonTag";
import { InputNameTag } from "@/components/CreateTag/InputNameTag";
import toast, { Toaster } from "react-hot-toast";
import { TagColor } from "@/class/TagColor";
import { postNewTag } from "@/services/fetching";



const Tag: FC = () => {

    const { handleSubmit, reset, watch, register } = useForm();

    const onSubmit = handleSubmit((data) => {

        if (data["color-name-tag"] !== "#000000") {

            if (data["name-name-tag"] !== '' || data["name-name-tag"] !== null) {
                console.log(data);
                const newtag = new TagColor(data["color-name-tag"], data["name-name-tag"], '')
                postNewTag(newtag)
                toast.success('Tag sent successfully');
                reset()
            } else {
                toast.error('Type Name tag');
            }

        } else {
            toast.error('Select color tag');
        }
    })

    return (
        <CreateTagContainer>
            <Typography variant="subTitle">
                Create your tag color
            </Typography>
            <CreateTagForm
                handleSubmit={onSubmit}
            >
                <CreateTag
                    register={register}
                    reset={reset}
                    watch={watch}
                />
                <InputNameTag
                    register={register}
                />
                <SubmitButtonTag />
            </CreateTagForm>
            <Toaster />
        </CreateTagContainer>
    )
}

export default Tag