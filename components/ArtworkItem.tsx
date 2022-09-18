import { Artwork } from 'types';
// import Image from 'next/image';

const ArtworkItem = ({ title, author, site_link, img_link }: Artwork) => (
  <div>
    {/* TODO: Should I use next image? */}
    {/* images: { */}
    {/* //   domains: ['lh3.googleusercontent.com'], */}
    {/* // }, */}
    {/* //   <Image src={webImage.url} alt='Artwork image' width={500} height={500} /> */}
    <img src={img_link} alt='Artwork' />
    <h1>{author}</h1>
    <p>{title}</p>
    <a href={site_link}>Link to the Rijksmuseum site</a>
  </div>
);

export { ArtworkItem };
