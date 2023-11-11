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

  let loggedIn = false;

  if (typeof token === "string") {
    loggedIn = verify(token, process.env.SECRET_KEY);
  }

  res.json({ loggedIn });
};
