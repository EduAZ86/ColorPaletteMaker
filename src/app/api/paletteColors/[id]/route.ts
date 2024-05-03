import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";

import { NextApiRequest } from "next";
import { deletePaletteController, getPalleteByIdController, updateSocialColorPaletteController } from "@/lib/paletteColorsControllers";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


export const GET = async (req: NextApiRequest, context: { params: Params }) => {
    await connectDB()
    try {
        const id = context.params.id as string;
        const response = await getPalleteByIdController(id);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
};

export const DELETE = async (req: NextApiRequest, context: { params: Params }) => {
    await connectDB()
    try {
        const id = context.params.id as string;
        const response = await deletePaletteController(id);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
};

export const PUT = async (req: NextApiRequest, context: { params: Params }) => {
    await connectDB()
    try {
        const id = context.params.id; // El ID ya debería estar correctamente capturado desde los parámetros de la ruta
        const interaction = req.url?.split('=')[1]
        console.log(interaction);

        const response = await updateSocialColorPaletteController(id, interaction!);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
};

