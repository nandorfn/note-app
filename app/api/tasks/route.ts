  import { NextResponse } from "next/server";
  import { PrismaClient } from "@prisma/client";
  import type { Task } from "@prisma/client";
  const prisma = new PrismaClient();
  
  export const POST = async (req: Request) => {
      const body: Task = await req.json();
      const task = await prisma.task.create({
        data: {
          title: body.title,
          deadline: body.deadline,
          status: 'PENDING',
          startTime: body.startTime,
          endTime: body.endTime,
          userId: Number(body.userId),
        }
      });
  
      return NextResponse.json(task, { status: 201 });
    }
