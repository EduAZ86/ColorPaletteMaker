'use client'
import { ColorPallete } from "@/class/paletteColors.class";
import { ColorPalleteType } from "@/types/data";

const arrayPaletteTest = [
    {
        first_color:'#EAEAEA',
        second_color:'#08D9D6',    
        third_color:'#FF2E63',    
        fourth_color:'#252A34',
        fifth_color:'#FF9B82'
    },
    {
        first_color:'#E8FFC2',
        second_color:'#2FA4FF',    
        third_color:'#00FFDD',    
        fourth_color:'#0E185F',
        fifth_color:'#FFC8C8'   
    },
    {
        //light azulado tenue
        first_color:'#D3EBCD',
        second_color:'#EC53B0',    
        third_color:'#839AA8',    
        fourth_color:'#635666',
        fifth_color:'#57375D'   
    },    
    {
        //light celeste, salmon y beige
        first_color:'#222831',
        second_color:'#FFD3B0',    
        third_color:'#FF6969',    
        fourth_color:'#DAD4B5',
        fifth_color:'#22A39F'  
    },
    {
        //dark naranja y gris oscuro
        first_color:'#222831',
        second_color:'#393E46',    
        third_color:'#EC625F',    
        fourth_color:'#EEEEEE',
        fifth_color:'#8785A2'   
    },
    {
        first_color:'#4682A9',
        second_color:'#AEDBCE',    
        third_color:'#839AA8',    
        fourth_color:'#749BC2',
        fifth_color:'#57375D'   
    },    
    {
        //light celeste, salmon y beige
        first_color:'#222831',
        second_color:'#FFD3B0',    
        third_color:'#FF6969',    
        fourth_color:'#A6D0DD',
        fifth_color:'#C63D2F'  
    },
    {
        //dark naranja y gris oscuro
        first_color:'#222831',
        second_color:'#393E46',    
        third_color:'#EC625F',    
        fourth_color:'#952323',
        fifth_color:'#8785A2'   
    }
]

export const arrayPalettesTEST:ColorPalleteType[] = arrayPaletteTest.map((palette) => {
    const palette_color = new ColorPallete(
        palette.first_color,
        palette.second_color,
        palette.third_color,
        palette.fourth_color,
        palette.fifth_color)
    return(palette_color)
})