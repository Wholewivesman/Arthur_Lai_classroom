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
  // console.log(checkAuth(req));
  // // Redirect to login page if user is not logged in when accessing the resources
  // if (req.url.includes("/res") && !checkAuth(req))
  //   return NextResponse.redirect(new URL("/login", req.url));

  // // Redirect to login page if user is not logged in when accessing the account page
  // if (req.url.includes("/account") && !checkAuth(req))
  //   return NextResponse.redirect(new URL("/login", req.url));

  // // Redirect to main page if user has logged in
  // if (req.url.includes("/login") && checkAuth(req))
  //   return NextResponse.redirect(new URL("/", req.url));
}
