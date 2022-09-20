import { ArtObject, ErrorResponse } from 'types';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query } = req.query;

    const response = await fetch(
      `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.API_KEY}&imgonly=True&${query}`
    );
    const { artObjects } = await response.json();

    const apiIds: string[] = [];
    const artworks = artObjects.map((artwork: ArtObject) => {
      apiIds.push(artwork.id);
      return {
        apiId: artwork.id,
        title: artwork.title,
        author: artwork.principalOrFirstMaker,
        siteLink: artwork.links.web,
        imgLink: artwork.webImage.url,
        isFavorite: false,
      };
    });

    return res.status(200).json({ artworks, apiIds });
  } catch (err) {
    const error = err as ErrorResponse;
    return res.status(error.status || 500).end(error.message);
  }
}
