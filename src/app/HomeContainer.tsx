import { FC, ReactNode } from "react";

export const HomeContainer: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <main
            className={`
            w-full h-full
            flex flex-col
            md:py-4 md:pl-6 md:pr-0
            p-4
            `}
        >
            {children}
        </main>
    )
}