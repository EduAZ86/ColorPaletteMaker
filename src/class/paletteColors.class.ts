export class ColorPallete {
    idColors:string;
    first_color:string;
    second_color:string;    
    third_color:string;    
    fourth_color:string;
    fifth_color:string;

    first_color_rgb:string;
    second_color_rgb:string;    
    third_color_rgb:string;    
    fourth_color_rgb:string;
    fifth_color_rgb:string;


    constructor(
        first_color:string,
        second_color:string,    
        third_color:string,    
        fourth_color:string,
        fifth_color:string,
    ) {
        this.first_color = first_color
        this.second_color = second_color
        this.third_color = third_color
        this.fourth_color = fourth_color
        this.fifth_color = fifth_color
        this.first_color_rgb = this.hexToRgb(this.first_color);
        this.second_color_rgb = this.hexToRgb(this.second_color);
        this.third_color_rgb = this.hexToRgb(this.third_color);
        this.fourth_color_rgb = this.hexToRgb(this.fourth_color);
        this.fifth_color_rgb = this.hexToRgb(this.fifth_color);
        this.idColors = this.idGenerator(this.first_color, this.second_color, this.third_color, this.fourth_color, this.fifth_color )
    }
    private hexToRgb(hex: string): string {
        hex = hex.replace(/^#/, '')

        if (!/^[0-9A-F]{6}$/i.test(hex)) {
            throw new Error('Valor hexadecimal no válido');
        }
        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)
        return `(${r}, ${g}, ${b})`
    }

    private idGenerator(first:string, second:string, third:string, fourth:string, fifth:string):string {
        first = first.replace(/^#/, '');
        second = second.replace(/^#/, '');
        third = third.replace(/^#/, '');
        fourth = fourth.replace(/^#/, '');
        fifth = fifth.replace(/^#/, '');
        return `${first}-${second}-${third}-${fourth}-${fifth}`
    }


}