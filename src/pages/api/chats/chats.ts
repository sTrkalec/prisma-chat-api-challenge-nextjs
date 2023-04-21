import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { message } = req.body
    const chat = await prisma.chat.create({
      data: { message },
    })
    res.status(201).json(chat)
  } else if (req.method === 'GET') {
    const chats = await prisma.chat.findMany()
    res.status(200).json(chats)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
