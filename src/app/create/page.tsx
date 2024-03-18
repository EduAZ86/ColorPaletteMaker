"use client"
import CreatePaletteCard from "@/components/CreatePaletteCard";
import React from "react";

const Create:React.FC = () => {

    return(
        <div className="
        flex w-full h-full flex-col justify-center items-center pl-0 pb-28
        md:pb-0 md:pl-5 md:pr-4
        ">
            <CreatePaletteCard/>
        </div>
    )
}

export default Create