import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { getAllPalletesByPageController, postNewPalleteColorController } from "@/lib/paletteColorsControllers";


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

export const GET = async (req: NextApiRequest) => {
    try {
        await connectDB()
        let lengthPageValue, offsetValue;
        if (req.query) {
            lengthPageValue = req.query.lengthPage as string;
            offsetValue = req.query.offset as string;
        }
        const response = await getAllPalletesByPageController(lengthPageValue!, offsetValue!);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ data: null, error: error.message }, { status: 500 })
    }
};
