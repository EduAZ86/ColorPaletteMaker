import { ReactNode } from "react";

export interface IButtonComponentProps {
    children: ReactNode;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isFav: boolean;
}

interface IFavButtonProps {
    idPalette: string;
}