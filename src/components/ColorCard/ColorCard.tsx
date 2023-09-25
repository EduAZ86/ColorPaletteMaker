import React from "react";
import styles from './ColorCard.module.css'
import { CopyToClipboard } from "@/utils/copyToClipboard";
import { ComplementaryColor, hexToRgb } from "@/utils/colorsCalculator";

interface ColorCardProps {
    color: string;
    ident:string;
  }

  const ColorCard:React.FC <ColorCardProps> = ({color, ident}) => {

    const colorRGB = hexToRgb(color)
    const colorRGBComplementary = ComplementaryColor(colorRGB)
    const borderTopLeftRadius = (ident === 'first'? '0.5rem':0 )
    const borderBottomLeftRadius = (ident === 'first'? '0.5rem':0 )
    const borderTopRightRadius =  (ident === 'fifth'? '0.5rem':0 )
    const borderBottomRightRadius =  (ident === 'fifth'? '0.5rem':0 )

    return(
        <div 
        style={
            {
                backgroundColor:color,
                borderTopLeftRadius:borderTopLeftRadius,
                borderBottomLeftRadius:borderBottomLeftRadius,
                borderTopRightRadius:borderTopRightRadius,
                borderBottomRightRadius:borderBottomRightRadius
            }}
        className={styles.color}>
        <button
            onClick={() => CopyToClipboard(color)}
            style={{color:colorRGBComplementary}} 
            className={styles.copyColor}
            >
                <span
                    className={styles.copied}
                    style={{backgroundColor:colorRGBComplementary, color:color}}
                >copied</span>
                {color}
        </button>
        <button
            onClick={() => CopyToClipboard(`rgb(${colorRGB})`)}
            style={{color:colorRGBComplementary}}  
            className={styles.copyColor}
            >
                <span
                    className={styles.copied}
                    style={{backgroundColor:colorRGBComplementary, color:color}}
                >copied</span>
                {`rgb(${colorRGB})`}
        </button>        
    </div>
    )
}

export default ColorCard