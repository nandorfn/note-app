import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Task } from "@prisma/client";
const prisma = new PrismaClient();

export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
  const task = await prisma.task.delete({
    where:{
      id: Number(params.id)
    }
  });
  return NextResponse.json(task, {status: 200});
}

export const PATCH = async (request: Request, {params}: {params: {id: string}}) =>{
  const body: Task = await request.json();
  const task = await prisma.task.update({
      where:{
          id: Number(params.id)
      },
      data:{
          title: body.title,
          deadline: body.deadline,
          startTime: body.startTime,
          endTime: body.endTime,
      }
  });
  return NextResponse.json(task, {status: 200});
}

export const GET = async (request: Request, {params}: {params: {id: string}}) =>{
  const task = await prisma.task.findUnique({
    where:{
      id: Number(params.id)
    }
  });
  return NextResponse.json(task, {status: 200});
}