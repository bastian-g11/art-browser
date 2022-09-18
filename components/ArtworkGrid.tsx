import { useFetchArtworks } from 'hooks/useFetchArtworks';
import { ArtworkItem } from 'components/ArtworkItem';
import { Artwork } from 'types';

interface ArtworkGridProps {
  category: string;
}

const ArtworkGrid = ({ category }: ArtworkGridProps) => {
  const { artworks, isLoading } = useFetchArtworks(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Loading..</h2>}

      {artworks.map((artwork: Artwork) => (
        <ArtworkItem key={artwork.id} {...artwork} />
      ))}
    </>
  );
};

export { ArtworkGrid };
