import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// export const config = {
//   // match all requests for the resource path
//   matcher: ["/res/:path*", "/account/:path*"],
// };

const TOKEN_KEY = process.env.USER_TOKEN_COOKIE_KEY;

const authPagesPatterns = [
  /^\/account(\/.*)?$/,
];

/**
 *
 * @param {NextRequest} req
 * @returns {boolean} true if authenticated
 */
function checkAuth(req) {
  try {
    if (
      req.cookies.has(TOKEN_KEY) &&
      jwt.verify(req.cookies.get(TOKEN_KEY).value, process.env.JWT_SECRET)
    )
      return true;
  } catch (err) {
    console.error(err);
  }
  return false;
}

/**
 *
 * @param {NextRequest} req
 * @returns
 */
export function middleware(req) {
  // Check if the user has authenticated
  // let authed = checkAuth(req);
  // for (const pattern of authPagesPatterns) {
  //   // console.log("testing " + pattern);
  //   if (pattern.test(req.nextUrl.pathname) && !authed) {
  //     // return NextResponse.redirect("/");
  //   }
  // }

  // return NextResponse.next();

  // The pages for the authenticated users
  
  // The pages for the unauthenticated users

  // The pages for all users
}
