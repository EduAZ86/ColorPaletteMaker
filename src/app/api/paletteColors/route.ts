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

        const { searchParams } = new URL(req.url);
        const lengthPageValue = searchParams.get('lengthPage');
        const offsetValue = searchParams.get('offset');
        const response = await getAllPalletesByPageController(lengthPageValue!, offsetValue!);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ data: null, error: error.message }, { status: 500 })
    }
};
