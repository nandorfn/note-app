import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('authToken');
  const protectedPaths = ['/notes','/dashboard', '/to-do'];
  const protectedPaths2 = ['/notes','/dashboard', '/to-do'];
  
  if (authToken && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } else if (authToken && protectedPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  } else if (!authToken && protectedPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: '/:path*',
}