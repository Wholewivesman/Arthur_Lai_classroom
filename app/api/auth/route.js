import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const TOKEN_KEY = process.env.USER_TOKEN_COOKIE_KEY;

/**
 *
 * @param {NextRequest} req
 * @returns
 */
export async function GET(req) {
  if (req.cookies.has(TOKEN_KEY)) {
    const userToken = req.cookies.get(TOKEN_KEY).value;

    if (typeof userToken === "string") {
      try {
        const decodedPayload = verify(userToken, process.env.JWT_SECRET);
        return NextResponse.json({
          message: "Authencated.",
          success: true,
          decodedPayload,
        });
      } catch (err) {
        console.error("Error decoding token:", err.message);
      }
    }
  }

  return NextResponse.json({ message: "Unauthencated.", success: false });
}
