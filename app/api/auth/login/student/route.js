import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
  const payload = await req.json();
  const { id, password } = payload;
  if (!id || !password)
    return NextResponse.json({ message: "Login failed" }, { status: 401 });
  prisma.$connect();
  const result = await prisma.student.findUnique({
    where: {
      id,
    },
  });

  if (result === null || result.password !== password) {
    return Response.json({ message: "Login failed" }, { status: 401 });
  }

  const token = sign(
    { payload, exp: Math.floor(Date.now() / 1000) + 60 * 80 },
    process.env.JWT_SECRET
  );

  return Response.json({ token });
}
