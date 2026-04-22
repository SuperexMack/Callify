import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(req:NextRequest){
    let token = req.cookies.get("token")?.value
    let path = req.nextUrl.pathname


    if(path.startsWith("/_next") || path.startsWith("/public") || path.startsWith("/favicon.ico")){
        return NextResponse.next()
    }

    if(path.startsWith("/roomsection") || 
    path.startsWith("/Receiver") || 
    path.startsWith("/roomsection") ||
    path.startsWith("/Sender")
    ){
        if(!token){
            return NextResponse.redirect(new URL("/Auth" , req.url))
        }
        return NextResponse.next()
    }

    if (path.startsWith('/Auth')) {
        if (token) {
            return NextResponse.redirect(new URL('/', req.url))
        }
        return NextResponse.next()
    }

    return NextResponse.next()

}

export const config = {
    matcher: ['/:path*'],
}