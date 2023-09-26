import React, {useRef} from "react";

export const useDrawnPalette = (palette:string[]) => {

    const canvasRef = useRef<any>(null);
    
    const drawPalette = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const colorWidth = canvas.width / palette.length;
    
        palette.forEach((color, index) => {
          ctx.fillStyle = color;
          ctx.fillRect(index * colorWidth, 0, colorWidth, canvas.height);
        });
      };
    
      const downloadPalette = () => {
        drawPalette();
        const canvas = canvasRef.current;
        const imageURI = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageURI;
        link.download = `palette(${palette.join()}).png`;
        link.click();
      };
    return {canvasRef, downloadPalette}  

}
