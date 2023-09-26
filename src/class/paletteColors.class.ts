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

    tags:string[] = [''];
    views:number = 0;
    shares:number = 0;
    create_date_ms:number;
    create_date:string;
    time_ago:string = '0 seconds';

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
        this.create_date_ms = Date.now()
        this.create_date = this.stringCreateData(this.create_date_ms)
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

    private stringCreateData (date_ms:number){     
        const dateString = new Date(date_ms).toLocaleString();
        return dateString
    }

    public setViews(views:number){
        this.views = views
    }

    public setTags(tags:string[]){
        this.tags = this.tags.concat(tags)
    }
    public setTimeAgo() {
        const createDateMs = this.create_date_ms
        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24
        const week = day * 7
        const mounth = day * 31
        const year = mounth * 12    
        const current_Date_ms = Date.now();
        const time_ago_ms = current_Date_ms - createDateMs
    
        if (time_ago_ms < minute) {
            const time_seconds = Math.floor(time_ago_ms/second)
            this.time_ago = `${time_seconds} seconds`
        }
        if (time_ago_ms >= minute && time_ago_ms < hour ) {
            const time_minutes = Math.floor(time_ago_ms/minute)
            this.time_ago = `${time_minutes} minutes`
        }
        if (time_ago_ms >= hour && time_ago_ms < day ) {
            const time_hour = Math.floor(time_ago_ms/hour)
            this.time_ago = `${time_hour} hours`
        }
        if (time_ago_ms >= day && time_ago_ms < week ) {
            const time_day = Math.floor(time_ago_ms/day)
            this.time_ago = `${time_day} days`
        }
        if (time_ago_ms >= week && time_ago_ms < (mounth) ) {
            const time_week = Math.floor(time_ago_ms/week)
            this.time_ago = `${time_week} weeks`
        }
        if (time_ago_ms >= mounth && time_ago_ms < (year) ) {
            const time_mounth = Math.floor(time_ago_ms/mounth)
            this.time_ago = `${time_mounth} mounths`
        }
        if (time_ago_ms >= year ) {
            const time_year = Math.floor(time_ago_ms/year)
            this.time_ago = `${time_year} years`
        }    
    }
}