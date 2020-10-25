import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { NEXT_PUBLIC_API_URI } = process.env;
  const { tag } = req.query;
  try {
    const { data } = await axios.get(`${NEXT_PUBLIC_API_URI}/rss/${tag}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/xml');
    res.end(data);
  } catch (e) {
    throw new Error(e);
  }
}
