"use client"
import DarkModeProvider from "@/theme/themeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface IProvidersProps {
    children: ReactNode
}

export const Providers = ({ children }: IProvidersProps) => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <DarkModeProvider>
                {children}
            </DarkModeProvider>
        </QueryClientProvider>
    )
}