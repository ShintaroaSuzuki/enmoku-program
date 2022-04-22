import { NextApiRequest, NextApiResponse } from 'next'
import requestIp from 'request-ip'
import { sendAccessData } from '@/lib/handleSupabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientIp = requestIp.getClientIp(req) || "IP_NOT_FOUND";
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed`})
  }
  try {
    const { action, category, label } = JSON.parse(req.body)

    sendAccessData({
      ts: new Date(),
      ip: clientIp,
      action,
      category,
      label
    })

    res.status(201).json({ msg: 'Success' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}
