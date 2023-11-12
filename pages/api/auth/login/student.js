import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const payload = JSON.parse(req.body);
  const { id, password } = payload;
  prisma.$connect();
  const result = await prisma.student.findUnique({
    where: {
      id,
    },
  });

  if (result === null || result.password !== password) {
    res.status(401).json({ message: "Login failed" });
    return;
  }

  const token = sign(
    { payload, exp: Math.floor(Date.now() / 1000) + 60 * 80 },
    process.env.JWT_SECRET
  );

  res.status(200).json({ token });
};
