import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if(req.method==='GET'){
        const user = await prisma.user.findFirst();
        return res.status(200).json(user);
    }
}