import { useFetchArtworks } from 'hooks/useFetchArtworks';
import { ArtworkItem } from 'components/ArtworkItem';

type ArtworkGridProps = {
  category: string;
};

const ArtworkGrid = ({ category }: ArtworkGridProps) => {
  const { artworks, isLoading } = useFetchArtworks(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Loading..</h2>}

      {artworks.map(artwork => (
        <ArtworkItem key={artwork.id} {...artwork} />
      ))}
    </>
  );
};

export { ArtworkGrid };
