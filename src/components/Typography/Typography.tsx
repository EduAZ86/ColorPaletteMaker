'use client'
import { FC } from "react";
import { ITypographyProps, TTypographyVariant } from "./types";
import { Caption, TextError, MainTitle, Paragraph, Title, TextButton, Label, SubTitle } from "./styles.tw";

const TypographySchema: TTypographyVariant = {
    mainTitle: (props: ITypographyProps) => (
        <MainTitle {...props}>{props.children}</MainTitle>
    ),
    title: (props: ITypographyProps) => (
        <Title {...props}>{props.children}</Title>
    ),
    subTitle: (props: ITypographyProps) => (
        <SubTitle {...props}>{props.children}</SubTitle>
    ),
    cardTitle: (props: ITypographyProps) => (
        <Title {...props}>{props.children}</Title>
    ),
    caption: (props: ITypographyProps) => (
        <Caption {...props}>{props.children}</Caption>
    ),
    paragraph: (props: ITypographyProps) => (
        <Paragraph {...props}>{props.children}</Paragraph>
    ),
    error: (props: ITypographyProps) => (
        <TextError {...props}>{props.children}</TextError>
    ),
    textButton: (props: ITypographyProps) => (
        <TextButton {...props}>{props.children}</TextButton>
    ),
    label: (props: ITypographyProps) => (
        <Label {...props}>{props.children}</Label>
    ),
}
export const Typography: FC<ITypographyProps> = (props: ITypographyProps) => {
    return TypographySchema[props?.variant](props);
};

