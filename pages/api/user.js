const { NextApiRequest, NextApiResponse } = require("next");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
    if(req.method !== "POST")
        return res.status(405).json({message: "Method not allowed"});
    const data = JSON.parse(req.body);
    const savedUser = await prisma.user.create({
        data
    });
    res.json(savedUser);
}