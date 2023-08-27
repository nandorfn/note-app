import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
const crypto = require('crypto');


const prisma = new PrismaClient();
interface CustomJwtPayload  {
  userId: string;
}
const JWT_SECRET = process.env.JWT_SECRET;

export async function getProfileData(req: NextRequest) {
  try {
    const authToken = req.cookies.get('authToken');
    
    if (!authToken) {
      return null;
    }
    
    // Verifikasi token
    const token = authToken.toString(); // Mengonversi authToken ke string
    const decodedToken = jwt.verify(token, JWT_SECRET!) as CustomJwtPayload;    
    const userId = decodedToken.userId;
    
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: { id: true, username: true, email: true, }
    });
    
    return user;
  } catch (error) {
    console.error('Error while fetching profile data:', error);
    return null;
  }
}
