import { PrismaClient } from "@prisma/client";
import  argon2d  from "argon2";
import jwt from 'jsonwebtoken';
const crypto = require('crypto');
import type { User } from "@prisma/client";
import { NextResponse } from "next/server";

const generateSecretKey = (length: number): string => {
  return crypto.randomBytes(length).toString('hex');
};

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export const POST = async (req: Request, res: NextResponse) => {
  try {
      const body: User = await req.json();
      const user = await prisma.user.findUnique({
        where: {email: body.email},
      });
      
      if (!user) {
        return NextResponse.json({error: 'User not found'}, {status: 401});
      }
      
      const validPassword = await argon2d.verify(user.password, body.password);
      if (!validPassword) {
        return NextResponse.json({error: 'Invalid password'}, {status: 401});
      }
      
      const token = jwt.sign({username: user.username}, JWT_SECRET!, { expiresIn: '1h' });
      return NextResponse.json({token}, {status: 200});
    } catch (error) {
      console.error('Error during login:', error);
      return NextResponse.json({error:'Internal Server Error'}, {status:500});
    }
    
  }