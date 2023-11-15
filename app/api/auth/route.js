import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const TOKEN_KEY = process.env.USER_TOKEN_COOKIE_KEY;

/**
 *
 * @param {NextRequest} req
 * @returns
 */
export async function GET(req) {
  let success = false;

  if (req.cookies.has(TOKEN_KEY)) {
    const userToken = req.cookies.get(TOKEN_KEY).value;

    if (typeof userToken === "string") {
      try {
        success = verify(userToken, process.env.JWT_SECRET);
      } catch {}
    }
  }

  return NextResponse.json({ success });
}
