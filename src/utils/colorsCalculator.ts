
export const ComplementaryColor = (rgbColor:string) =>{
    const [r, g, b] = rgbColor.split(",").map(Number);
    const rComplementary = 255 - r;
    const gComplementary = 255 - g;
    const bComplementary = 255 - b;
    return `rgb(${rComplementary},${gComplementary},${bComplementary})`
}


export const hexToRgb = (hex: string): string => {
    hex = hex.replace(/^#/, '')

    if (!/^[0-9A-F]{6}$/i.test(hex)) {
        throw new Error('Valor hexadecimal no válido');
    }
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return `${r}, ${g}, ${b}`
}