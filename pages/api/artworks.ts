import { ArtObject, ErrorResponse } from 'types';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query } = req.query;
    console.log(query);

    const response = await fetch(
      `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.API_KEY}&imgonly=True&${query}`
    );
    const { artObjects } = await response.json();

    const artworks = artObjects.map((artwork: ArtObject) => ({
      id: artwork.id,
      title: artwork.title,
      author: artwork.principalOrFirstMaker,
      site_link: artwork.links.web,
      img_link: artwork.webImage.url,
    }));

    return res.status(200).json(artworks);
  } catch (err) {
    const error = err as ErrorResponse;
    return res.status(error.status || 500).end(error.message);
  }
}
