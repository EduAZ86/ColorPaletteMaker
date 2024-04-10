import { ITag } from "@/types/data";

export class TagColor implements ITag {
    color: string;
    name: string;
    _id?: string = '';
    constructor(color: string, name: string, _id?: string) {
        if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
            throw new Error("El color debe estar en formato hexadecimal.");
        }
        this.color = color;
        this.name = name;
        this._id = _id;
    }
    public getColor() {
        return this.color
    }
    public getTextTag() {
        return this.name
    }
    public getIdTag() {
        return this._id
    }
}