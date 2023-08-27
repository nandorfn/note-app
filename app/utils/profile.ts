import { NextRequest } from 'next/server';

export function getAuthTokenFromCookie(request: NextRequest): any | null {
  const authTokenCookie = request.cookies.get('authToken');
  
  return authTokenCookie;
}
