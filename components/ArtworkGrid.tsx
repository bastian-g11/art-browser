import { useFetchArtworks } from 'hooks/useFetchArtworks';
import { ArtworkItem } from 'components/ArtworkItem';
import { Artwork } from 'types';

interface ArtworkGridProps {
  query: string;
}

const ArtworkGrid = ({ query }: ArtworkGridProps) => {
  const { artworks, isLoading } = useFetchArtworks(query);

  return (
    <>
      <h3>{query}</h3>

      {isLoading && <h2>Loading..</h2>}

      {artworks.map((artwork: Artwork) => (
        <ArtworkItem key={artwork.id} {...artwork} />
      ))}
    </>
  );
};

export { ArtworkGrid };
