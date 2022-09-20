// import { useFetchArtworks } from 'hooks/useFetchArtworks';
import { ArtworkItem } from 'components/ArtworkItem';
import { Artwork } from 'types';
import { nanoid } from 'nanoid';

const ArtworkGrid = ({
  artworks,
  isProfile,
}: {
  artworks: Artwork[];
  isProfile: true;
}) => (
  <div className='container mb-12 mx-auto px-4 md:px-12'>
    <div className='flex flex-wrap -mx-1 lg:-mx-4'>
      {/* TODO: Don't display text if not search is done */}
      {artworks.length === 0 && (
        <p className=' m-auto text-gray-500'>No images found? Try again</p>
      )}
      {artworks.map((artwork: Artwork) => (
        <ArtworkItem key={nanoid()} artwork={artwork} isProfile={isProfile} />
      ))}
    </div>
  </div>
);

export { ArtworkGrid };
