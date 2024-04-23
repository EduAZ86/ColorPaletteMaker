import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { IincommigPaletteData } from "@/types/dataApi";
import { NextApiRequest } from "next";
import { getAllPalletesByPageController, postNewPalleteColorController } from "@/lib/paletteColorsControllers";


export const POST = async (req: any) => {
    await connectDB()
    const data = await req.json();
    try {
        console.log(data);

        const response = await postNewPalleteColorController(data);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message, dataIncomming: data }, { status: 500 })
    }
};

export const GET = async (req: NextApiRequest) => {
    await connectDB()
    try {
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
