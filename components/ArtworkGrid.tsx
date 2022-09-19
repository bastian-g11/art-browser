// import { useFetchArtworks } from 'hooks/useFetchArtworks';
import { ArtworkItem } from 'components/ArtworkItem';
import { Artwork } from 'types';
import { nanoid } from 'nanoid';

const ArtworkGrid = ({ artworks }: { artworks: Artwork[] }) => (
  <div className='container my-12 mx-auto px-4 md:px-12'>
    <div className='flex flex-wrap -mx-1 lg:-mx-4'>
      {/* TODO: Don't display text if not search is done */}
      {artworks.length === 0 && (
        <h1 className=' m-auto text-gray-500'>Not images found? Try again</h1>
      )}
      {artworks.map((artwork: Artwork) => (
        <ArtworkItem key={nanoid()} {...artwork} />
      ))}
    </div>
  </div>
);

export { ArtworkGrid };
