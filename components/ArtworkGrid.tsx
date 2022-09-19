// import { useFetchArtworks } from 'hooks/useFetchArtworks';
import { ArtworkItem } from 'components/ArtworkItem';
import { Artwork } from 'types';
import { nanoid } from 'nanoid';

const ArtworkGrid = ({ artworks }: { artworks: Artwork[] }) => (
  // <div className='grid md:grid-cols-2 xl:grid-cols-3  place-items-center'>
  <div className='container my-12 mx-auto px-4 md:px-12'>
    <div className='flex flex-wrap -mx-1 lg:-mx-4'>
      {/* TODO: Don't display text if not search is done */}
      {artworks.length === 0 && <h1>Not images found</h1>}
      {artworks.map((artwork: Artwork) => (
        <ArtworkItem key={nanoid()} {...artwork} />
      ))}
    </div>
  </div>
);

export { ArtworkGrid };
