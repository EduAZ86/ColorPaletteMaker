import connectDB from "@/lib/dbConnect"
import { NextRequest, NextResponse } from "next/server";
import { deleteTagController } from "@/lib/tagsController";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const DELETE = async (req: NextRequest, context: { params: Params }) => {
    await connectDB()
    try {
        const id = context.params.id as string;
        const response = await deleteTagController(id);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
};