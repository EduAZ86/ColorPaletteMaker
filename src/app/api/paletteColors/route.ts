import connectDB from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { getAllPalletesByPageController, postNewPalleteColorController } from "@/lib/paletteColorsServices";


export const POST = async (req: any) => {
    try {
        await connectDB()
        const data = await req.json();
        const response = await postNewPalleteColorController(data);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
};

export const GET = async (req: NextRequest) => {
    try {
        await connectDB()

        const { searchParams } = req.nextUrl;
        const lengthPageValue = searchParams.get('lengthPage');
        const offsetValue = searchParams.get('offset');
        if (lengthPageValue === null || offsetValue === null) {
            throw new Error('lengthPage or offset is null');
        }
        const response = await getAllPalletesByPageController(lengthPageValue!, offsetValue!);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ data: null, error: error.message }, { status: 500 })
    }
};
