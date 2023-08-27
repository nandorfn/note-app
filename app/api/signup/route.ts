import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
const prisma = new PrismaClient();
import argon2 from 'argon2';

export const POST = async (req: Request) => {
  const body: User = await req.json();
  const hashPW = await argon2.hash(body.password);
  const user = await prisma.user.create({
    data:{
      username: body.username,
      email: body.email,
      password: hashPW
    }
  });
  
  return NextResponse.json(user, {status: 201})
}