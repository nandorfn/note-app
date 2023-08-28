import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Note } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const body: Note = await req.json();
  const note = await prisma.note.create({
    data:{
      title: body.title,
      content: body.content,
      color: body.color,
      userId: Number(body.userId)
    }
  });
  
  return NextResponse.json(note, {status: 201});
}