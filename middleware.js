import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// export const config = {
//   // match all requests for the resource path
//   matcher: ["/res/:path*", "/account/:path*"],
// };

const TOKEN_KEY = process.env.USER_TOKEN_COOKIE_KEY;

/**
 *
 * @param {NextRequest} req
 * @returns {boolean} true if authenticated
 */
function checkAuth(req) {
  if (req.cookies.has(TOKEN_KEY)) {
    const userToken = req.cookies.get(TOKEN_KEY).value;

    try {
      if (userToken || jwt.verify(userToken, process.env.JWT_SECRET))
        return false;
    } catch (err) {
      console.error(err);
    }
  }
  return true;
}

/**
 *
 * @param {NextRequest} req
 * @returns
 */
export function middleware(req) {
  // process the request that needs to be authenticated
  if (req.url.includes("/res") || req.url.includes("/account")) {
    if (checkAuth(req))
      return NextResponse.redirect(new URL("/login", req.url));
  } else if (req.url.includes("/login")) {
    if (!checkAuth(req))
      return NextResponse.redirect(new URL("/account", req.url));
  }
}
