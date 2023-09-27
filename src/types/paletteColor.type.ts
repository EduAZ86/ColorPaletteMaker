
export type ColorPalleteType = {
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

    tags:string[];
    views:number;
    shares:number;
    create_date_ms:number;
    create_date:string;
    time_ago:string;
}

export type arrayPalettes = ColorPalleteType[]