import connectDB from "@/lib/dbConnect"
import { deleteTagController } from "@/lib/tagsController";
import { NextApiRequest } from "next"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { NextResponse } from "next/server";

export const DELETE = async (req: NextApiRequest, context: { params: Params }) => {
    await connectDB()
    try {
        const id = context.params.id as string;
        const response = await deleteTagController(id);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
};