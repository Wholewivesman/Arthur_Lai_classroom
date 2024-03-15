import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();
const maxAge = Number.parseInt(process.env.JWT_MAXAGE);

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
  const payload = await req.json();
  const { id, password } = payload;
  if (!id || !password)
    return NextResponse.json(
      { message: "Invalid username or password." },
      { status: 401 }
    );

  prisma.$connect();
  const result = await prisma.student.findUnique({
    where: {
      id,
    },
  });
  prisma.$disconnect();

  let token = null;
  if (result !== null && result.password === password) {
    token = sign({ result, role: "student" }, process.env.JWT_SECRET, {
      expiresIn: maxAge / 1000,
    });
  }
  
  if (token) {
    cookies().set(process.env.USER_TOKEN_COOKIE_KEY, token);
    return NextResponse.json(
      { message: "Login successful." }
    );
  } else
    return NextResponse.json(
      { message: "Invalid username or password." },
      { status: 401 }
    );
}
