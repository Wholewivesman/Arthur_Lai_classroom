import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
  const { token } = await req.json();
  if (!token) return NextResponse.json({ success: false }, { status: 401 });

  let success = false;

  if (typeof token === "string") {
    try {
      success = verify(token, process.env.JWT_SECRET);
    } catch {
      console.log(token);
    }
  }

  return NextResponse.json({ success });
}
