// import { useFetchArtworks } from 'hooks/useFetchArtworks';
import { ArtworkItem } from 'components/ArtworkItem';
import { Artwork } from 'types';

const ArtworkGrid = ({ artworks }) => (
  <>
    {artworks.map((artwork: Artwork) => (
      <ArtworkItem key={artwork.id} {...artwork} />
    ))}
  </>
);

export { ArtworkGrid };
