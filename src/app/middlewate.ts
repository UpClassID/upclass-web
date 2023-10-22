import { NextResponse } from "next/server";

// TODO: Not implemented yet
export async function middleware(req: {
    nextUrl?: any;
    url?: any;
    cookies?: any;
}) {
    const { cookies } = req;
    const { origin } = req.nextUrl;
    const token = cookies.token;

    const jwt = require("jsonwebtoken");

    const protectedPaths = ["/share"];

    if (req.url.includes(protectedPaths)) {
        if (!jwt) {
            return NextResponse.rewrite(`${origin}/login`);
        }

        try {
            let verifyResult = jwt.verify(jwt, "shhhhh");
            if (!verifyResult) {
                return NextResponse.rewrite(`${origin}/login`);
            }
        } catch (error) {
            console.log(error);
            return NextResponse.rewrite(`${origin}/login`);
        }
    }

    return NextResponse.next();
}
