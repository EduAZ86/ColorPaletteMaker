import Image from "next/image"
import logo from '../../../public/logo.png'
import { Typography } from "../Typography"

export const LogoContainer = () => {

    return (
        <div
            className={`
                w-fit h-full
                md:w-full md:h-14
                mb-4
                hidden 
                md:flex 
                md:flex-row flex-col
                items-center justify-center
                md:gap-2 gap-1
            `}
        >
            <Image
                src={logo}
                alt="logo"
                width={40}
                height={40}
                loading="lazy"
            />
            <span
                className={`
                hidden md:block
                `}
            >
            <Typography variant="subTitle">ShareColors</Typography>
            </span>
        </div>
    )
}