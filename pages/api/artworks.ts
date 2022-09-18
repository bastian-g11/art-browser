/* eslint-disable no-console */
import { ArtObject } from 'types';
import { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // TODO: query to lowercase?
    console.log(req.query);

    // const response = await fetch(
    //   `https://www.rijksmuseum.nl/api/en/collection?key=KHn4xrLx&imgonly=True&q=${query}`
    // );
    // const { artObjects } = await response.json();

    // const artworks = artObjects.map((artwork: ArtObject) => ({
    //   id: artwork.id,
    //   title: artwork.title,
    //   author: artwork.principalOrFirstMaker,
    //   site_link: artwork.links.web,
    //   img_link: artwork.webImage.url,
    // }));

    // return res.status(200).json(artworks);
    return;
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
