import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
  const note = await prisma.note.delete({
    where:{
      id: Number(params.id)
    }
  });
  return NextResponse.json(note, {status: 200});
  
}