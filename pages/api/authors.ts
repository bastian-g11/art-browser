import { NextApiRequest, NextApiResponse } from 'next/types';
import { ErrorResponse } from 'types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query } = req.query;

    console.log('BUSQUEDA', query);

    const url = `https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data.slice(0, 10));
  } catch (err) {
    const error = err as ErrorResponse;
    return res.status(error.status || 500).end(error.message);
  }
}
