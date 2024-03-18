'use client'
import { ITypographyProps } from "./types";
import { FC } from 'react'

export const MainTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h1
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center 
            text-6xl  m-0
            font-IbmPlex             
            bg-gradient-to-r from-light-primary to-light-secundary
            dark:bg-gradient-to-r dark:from-dark-primary dark:to-dark-secundary
            bg-clip-text text-transparent 
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
            text-3xl md:text-4xl 
            leading-tight tracking-tighter  m-0 
            font-IbmPlex 
            bg-gradient-to-r from-light-primary to-light-secundary
            dark:bg-gradient-to-r dark:from-dark-primary dark:to-dark-secundary
            bg-clip-text text-transparent
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
            text-4xl leading-tight tracking-tighter  m-0 
            font-IbmPlex 
            dark:text-dark-text text-light-primary
          
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
            text-2xl leading-tight tracking-tighter 
            font-IbmPlex 
            m-0
            bg-gradient-to-r from-light-primary to-light-secundary
            dark:bg-gradient-to-r dark:from-dark-primary dark:to-dark-secundary
            bg-clip-text text-transparent whitespace-nowrap
            `}
        >
            {children}
        </h3>
    );
};

export const Caption: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <h3
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'}
            text-center 
            text-2xl leading-tight tracking-tighter 
            font-IbmPlex 
             m-0 
            text-light-secundary-text dark:text-dark-secundary-text whitespace-pre-wrap
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
            ${textSize? textSize : 'text-base' }
            font-sans
             m-0
            text-light-text dark:text-dark-text
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
            text-sm leading-tight tracking-tighter font-sans m-0
            text-light-error
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
            text-sm font-sans
            text-light-secundary dark:text-dark-shadow
            `}
        >
            {children}
        </span>
    );
};

export const Label: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children }) => {
    return (
        <label 
            className={`
            md:${align} ${bold ? 'font-bold' : 'font-light'} 
            text-sm font-sans m-0
            `}
        >
            {children}
        </label>
    );
};