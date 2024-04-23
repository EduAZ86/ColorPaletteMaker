import { FC } from "react";
import { CreateTagContainer, InputsContainerProps } from "./styles.d";
import { ICreateTagProps } from "./types";
import { InputColorTag } from "./InputColorTag";

export const CreateTag: FC<ICreateTagProps> = ({ register, watch }) => {

    return (
        <CreateTagContainer>
            <InputsContainerProps>
                <InputColorTag
                    register={register}
                    watch={watch}
                />
            </InputsContainerProps>
        </CreateTagContainer>
    )
}