import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { getTagsByNameController, postNewTagsController } from "@/lib/tagsController";

export const GET = async (req: Request) => {
    await connectDB()
    try {
        const { searchParams } = new URL(req.url)
        const name = searchParams.get('name')      
        const response = await getTagsByNameController(name!);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ data: null, message: error.message }, { status: 500 })
    }
};

export const POST = async (req: any) => {
    await connectDB()
    try {
        const data = await req.json();
        const response = await postNewTagsController(data);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ data: null, message: error.message }, { status: 500 })
    }
};