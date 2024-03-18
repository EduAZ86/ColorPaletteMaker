import { FC, ReactNode } from "react";

export const HomeContainer: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <main
            className={`
            w-full h-full
            flex flex-col
            p-4
            `}
        >
            {children}
        </main>
    )
}