import { ReactNode } from "react";

export interface ICreateTagsContainerProps {
    children: ReactNode;
};

export interface IImputsContainerProps {
    children: ReactNode;
}

export interface IInputColorTagProps {
    register: UseFormRegister;
    watch: UseFormWatch<FieldValues>;
    isColection: boolean;
}

export interface IInputNameTagProps extends Pick<IInputColorTagProps, 'register'> { }

export interface ICreateTagProps extends Pick<IInputColorTagProps, 'register' | 'watch'> {
    reset: UseFormReset<FieldValues>
 }

export interface ISubmitButtonProps {
    handlerClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}