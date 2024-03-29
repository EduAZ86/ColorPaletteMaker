export interface ITagColor {
    color: string;
    textTag: string;
}

export class TagColor implements ITagColor {
    color: string;
    textTag: string;
    constructor(color: string, textTag: string) {
        if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
            throw new Error("El color debe estar en formato hexadecimal.");
        }
        this.color = color;
        this.textTag = textTag
    }
    public getColor() {
        return this.color
    }
    public getTextTag() {
        return this.textTag
    }
}