import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";

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
  const { token } = payload;

  let success = false;

  if (typeof token === "string") {
    try {
      success = verify(token, process.env.JWT_SECRET);
    }
    catch {
      res.json({ success: false });
      return;
    }
  }

  res.json({ success });
};
