/* eslint-disable no-console */
// import { ArtObject } from 'types';
import { NextApiRequest, NextApiResponse } from 'next/types';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('ENTRA');

    const url = `https://www.rijksmuseum.nl/en/search/advanced/terms?field=involvedMaker&q=daniel`;
    const { data } = await axios.get(url);
    const resp = data.slice(0, 10);
    res.status(200).json(resp);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
