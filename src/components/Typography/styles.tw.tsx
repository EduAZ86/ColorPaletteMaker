'use client'
import { ITypographyProps } from "./types";
import { FC } from 'react'

export const MainTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h1
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center 
            text-3xl  m-0
            font-roboto           
            text-light-font dark:text-dark-font
            `
            }
        >
            {children}
        </h1>
    );
};

export const Title: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h2
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center 
            text-2xl md:text-4xl            
            font-roboto
            text-light-font dark:text-dark-font   
            `
            }
        >
            {children}
        </h2>
    );
};

export const SubTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h2
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-xl leading-tight tracking-tighter  m-0 
            font-roboto 
            text-light-font dark:text-dark-font
          
            `
            }
        >
            {children}
        </h2>
    );
};

export const CardTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h3
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-xl
            font-roboto
            m-0
            text-light-font dark:text-dark-font   
            `}
        >
            {children}
        </h3>
    );
};


export const Paragraph: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textSize }) => {
    return (
        <p
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            ${textSize ? textSize : 'text-sm'}
            font-roboto
             m-0
             text-light-font dark:text-dark-font   
             `
            }
        >
            {children}
        </p>
    );
};

export const TextError: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <span
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-sm font-roboto m-0
            text-red-800 dark:text-red-500
            `}
        >
            {children}
        </span>
    );
};

export const TextButton: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <span
            className={`
        md:${align} ${bold ? 'font-bold' : 'font-light'} 
        text-sm font-roboto
        text-light-secundary dark:text-dark-shadow
        `}
        >
            {children}
        </span>
    );
};

export const Label: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <span
            className={`
        md:${align} ${bold ? 'font-bold' : 'font-light'} 
        text-sm font-roboto
        text-light-font dark:text-dark-font
        cursor-pointer
        `}
        >
            {children}
        </span>
    );
};
export const TextCodeColor: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h3
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center
            text-3xs 
            font-roboto 
             m-0 
             text-light-font dark:text-dark-font   
            `}
        >
            {children}
        </h3>
    );
};