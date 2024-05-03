import connectDB from "@/lib/dbConnect";
import { findPalettesByTags } from "@/lib/paletteColorsControllers";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
    try {
        await connectDB()
        const stringIdTags = req.url?.split('=')[1] as string
        const arrayIdTags = stringIdTags.includes(',') ? stringIdTags.split(',') : [stringIdTags]
        const response = await findPalettesByTags(arrayIdTags);
        return NextResponse.json({ data: response }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ data: null, error: error.message }, { status: 500 });
    }
}
