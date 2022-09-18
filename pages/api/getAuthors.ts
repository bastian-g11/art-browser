/* eslint-disable no-console */
// import { ArtObject } from 'types';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('ENTRA');

    const url = `https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=daniel`;
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data.slice(0, 10));
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
