import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

const TOKEN_KEY = process.env.USER_TOKEN_COOKIE_KEY;

/**
 * @param {NextRequest} req
 */
export async function GET(req) {
  cookies().delete(TOKEN_KEY);

  return NextResponse.json({ foo: req.cookies });
}
    