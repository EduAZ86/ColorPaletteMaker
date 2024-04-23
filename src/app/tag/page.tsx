'use client'
import { FC } from "react";
import { CreateTagContainer } from "./styles.d";
import { Typography } from "@/components/Typography";
import { CreateTagForm } from "./CreateTagForm";
import { useForm } from "react-hook-form";
import { CreateTag } from "@/components/CreateTag/CreateTag";
import { SubmitButtonTag } from "@/components/CreateTag/SubmitButtonTag";
import { InputNameTag } from "@/components/CreateTag/InputNameTag";


const Tag: FC = () => {

    const { handleSubmit, register, reset, watch } = useForm();

    const onSubmit = handleSubmit((data) => {

        reset()
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
                    watch={watch}
                />
                <InputNameTag
                    register={register}
                />
                <SubmitButtonTag />
            </CreateTagForm>
        </CreateTagContainer>
    )
}

export default Tag