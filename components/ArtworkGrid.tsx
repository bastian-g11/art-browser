// import { useFetchArtworks } from 'hooks/useFetchArtworks';
import { ArtworkItem } from 'components/ArtworkItem';
import { Artwork } from 'types';

const ArtworkGrid = ({ artworks }) => (
  <>
    {artworks.length === 0 && <h1>Not images found</h1>}
    {artworks.map((artwork: Artwork) => (
      <ArtworkItem key={artwork.id} {...artwork} />
    ))}
  </>
);

export { ArtworkGrid };
