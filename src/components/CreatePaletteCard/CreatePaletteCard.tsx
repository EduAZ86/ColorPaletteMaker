'use client'
import React from 'react'

const CreatePaletteCard:React.FC = () => {
    const arrayColors = [1,2,3,4,5]
    return(
        <div
            className='
                flex flex-col w-fit h-fit py-2 px-2 bg-light-background rounded-xl shadow-card
                dark:bg-dark-background dark:shadow-dark-card
                '
        >
            <div 
                className='
                    flex flex-row w-fit bg-light-background rounded-xl 
                    dark:bg-dark-background 
                    '
                >
                    {arrayColors.map((item, index) => {
                        return(
                            <div className={`
                                flex flex-col justify-center items-center gap-2 px-1 py-1                            
                                `}

                                key={index}
                            >
                                <span
                                    className={`
                                        w-12 h-32 rounded-t-full rounded-b-full                                        
                                        `}
                                    style={{background:'#FFFFFF'}}
                                />

                            
                            </div>
                        )
                    })}

            </div>

        </div>
    )
}

export default CreatePaletteCard