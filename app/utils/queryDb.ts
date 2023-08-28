import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { cookies } from 'next/headers';

export const getCookie = () => {
  const cookieStore = cookies();
  const authToken = cookieStore.get('authToken');
  if (authToken) {
    const tokenData = JSON.parse(Buffer.from(authToken.value.split('.')[1], 'base64').toString());
    return tokenData.userId;
  }
};

export const getData = async (includeField: any) => {
  const userId = await getCookie();

  if (userId) {
    const res = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        [includeField]: true,
      },
    });

    if (res) {
      return res[includeField];
    }
  }

  return [];
};