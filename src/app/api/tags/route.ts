import { ITag } from "@/types/dataApi";
import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { getTagsByNameController, postNewTagsController } from "@/lib/tagsController";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB()
    try {
        const name = typeof req.query.name as string;
        const response = await getTagsByNameController(name);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB()
    try {
        const data: ITag = await req.body;
        const response = await postNewTagsController(data);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
};