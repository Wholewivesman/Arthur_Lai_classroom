import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();
const maxAge = 60 * 80;

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
  const payload = await req.json();
  const { id, password } = payload;
  if (!id || !password) return NextResponse.json({}, { status: 401 });

  prisma.$connect();
  const result = await prisma.student.findUnique({
    where: {
      id,
    },
  });
  prisma.$disconnect();

  if (result === null || result.password !== password)
    return NextResponse.json({}, { status: 401 });

  const token = sign(
    { payload, exp: Math.floor(Date.now() / 1000) + maxAge },
    process.env.JWT_SECRET
  );

  cookies().set(process.env.USER_TOKEN_COOKIE_KEY, token, { maxAge });
  return NextResponse.json(
    {foo: token},
    {
      status: 200,
    }
  );
}
